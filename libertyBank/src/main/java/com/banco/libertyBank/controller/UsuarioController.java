package com.banco.libertyBank.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.banco.libertyBank.model.Usuario;
import com.banco.libertyBank.repository.IUsuario;

@RestController
@CrossOrigin("*")
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private IUsuario dao;

    @Autowired
    private JavaMailSender javaMailSender;

    @GetMapping
    public ResponseEntity<List<Usuario>> listarUsuarios() {
        List<Usuario> usuarios = dao.findAll();
        return ResponseEntity.ok(usuarios);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Usuario> obterUsuario(@PathVariable Integer id) {
        Optional<Usuario> usuario = dao.findById(id);
        return usuario.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Usuario> criarUsuario(@RequestBody Usuario usuario) {
        Usuario usuarioCriado = dao.save(usuario);

        // Envie o e-mail de boas-vindas ao usuário
        enviarEmailBoasVindas(usuario);

        return ResponseEntity.ok(usuarioCriado);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Usuario> atualizarUsuario(@PathVariable Integer id, @RequestBody Usuario usuario) {
        Optional<Usuario> usuarioExistente = dao.findById(id);
        if (usuarioExistente.isPresent()) {
            usuario.setId(id);
            Usuario usuarioAtualizado = dao.save(usuario);
            return ResponseEntity.ok(usuarioAtualizado);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluirUsuario(@PathVariable Integer id) {
        Optional<Usuario> usuarioExistente = dao.findById(id);
        if (usuarioExistente.isPresent()) {
            dao.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    private void enviarEmailBoasVindas(Usuario usuario) {
        String emailDestinatario = usuario.getEmail();
        String assunto = "Bem-vindo ao Liberty Bank";
        String mensagem = "Olá " + usuario.getNome() + ",\n\nBem-vindo ao Liberty Bank! Agradecemos por se cadastrar em nosso banco. Estamos ansiosos para ajudá-lo com suas necessidades financeiras.\n\nAtenciosamente,\nEquipe do Liberty Bank";

        SimpleMailMessage email = new SimpleMailMessage();
        email.setTo(emailDestinatario);
        email.setSubject(assunto);
        email.setText(mensagem);

        javaMailSender.send(email);
    }
}
