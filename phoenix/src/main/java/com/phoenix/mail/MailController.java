package com.phoenix.mail;

import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;

import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring5.SpringTemplateEngine;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController("/mail")
public class MailController {

	@Value("${phoenix.support.mail}")
	private String toMail;

	@Value("${spring.mail.username}")
	private String fromMail;

	@Autowired
	private JavaMailSender emailSender;

	@Autowired
	private SpringTemplateEngine templateEngine;

	/*
	 * private void sendSimpleMessage(String to, String subject, String text) {
	 * SimpleMailMessage message = new SimpleMailMessage(); message.setTo(to);
	 * message.setSubject(subject); message.setText(text);
	 * emailSender.send(message); }
	 */
	private boolean sendMailWithTemplate(String subject, Map<String, Object> contentMap, String templateName) {
		try {
			MimeMessage message = emailSender.createMimeMessage();
			MimeMessageHelper helper = new MimeMessageHelper(message, MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED,
					StandardCharsets.UTF_8.name());

			Context context = new Context();
			context.setVariables(contentMap);
			String html = templateEngine.process(templateName, context);
			helper.setTo(toMail);
			helper.setText(html, true);
			helper.setSubject(subject);
			helper.setFrom(fromMail);
			emailSender.send(message);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	@PostMapping("/send")
	public ResponseEntity<MailRequest> sendMail(@RequestBody MailRequest mailRequest) {
		Map<String, Object> context = new HashMap<>();
		context.put("userMail", mailRequest.getUserEmail());
		context.put("userName", mailRequest.getUserName());
		context.put("query", mailRequest.getQuery());
		return sendMailWithTemplate("Query from " + mailRequest.getUserEmail(), context, "notification")
				? ResponseEntity.ok().build()
				: ResponseEntity.notFound().build();
	}

}
