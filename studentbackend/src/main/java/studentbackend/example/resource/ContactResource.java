package studentbackend.example.resource;

import java.net.URI;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import studentbackend.example.domain.Contact;
import studentbackend.example.service.ContactService;

@RestController
@RequestMapping("/contacts")
@RequiredArgsConstructor
public class ContactResource {
    private final ContactService contactService;
       @PostMapping
    public ResponseEntity<Contact> createContact(@RequestBody Contact contact) {
        //return ResponseEntity.ok().body(contactService.createContact(contact));
        return ResponseEntity.created(URI.create("/contacts/userID")).body(contactService.createContact(contact));
    }

    
}
