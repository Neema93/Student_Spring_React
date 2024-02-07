package studentbackend.example.service;



import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import studentbackend.example.domain.Contact;
import studentbackend.example.repo.ContactRepo;

@Service
@Slf4j
@Transactional(rollbackOn = Exception.class)
@RequiredArgsConstructor
public class ContactService {
    private final ContactRepo contactRepo;
    public Page<Contact> getAllContect(int page,int size){
        return contactRepo.findAll(PageRequest.of(page, size, Sort.by("name")));
    }
    public Contact getContact(String id){
        return contactRepo.findById(id).orElseThrow(() -> new RuntimeException("Contact not found"));
    }
    public Contact createContact(Contact contact){
        return contactRepo.save(contact);
    }
    public void deleteContact(Contact contact){
        contactRepo.delete(contact);
    }
    public String uploadPhoto(String id, MultipartFile file){
        Contact contact = getContact(id);
        String photoUrl =null;
        contact.setPhotoUrl(photoUrl);
        contactRepo.save(contact);
        return photoUrl;
    } 
}
