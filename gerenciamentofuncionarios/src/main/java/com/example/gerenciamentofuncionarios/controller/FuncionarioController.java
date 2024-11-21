package com.example.gerenciamentofuncionarios.controller;

import com.example.gerenciamentofuncionarios.model.Funcionario;
import com.example.gerenciamentofuncionarios.service.FuncionarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/funcionarios")
public class FuncionarioController {

    @Autowired
    private FuncionarioService funcionarioService;

    @GetMapping
    public List<Funcionario> listarTodos() {
        return funcionarioService.listarTodos();
    }

    @PostMapping
    public Funcionario salvar(@RequestBody Funcionario funcionario) {
        return funcionarioService.salvar(funcionario);
    }

    @GetMapping("/{id}")
    public Funcionario buscarPorId(@PathVariable Long id) {
        return funcionarioService.buscarPorId(id);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        funcionarioService.deletar(id);
    }

    @PutMapping("/{id}")
    public Funcionario atualizar(@PathVariable Long id, @RequestBody Funcionario funcionario) {
        Funcionario existente = funcionarioService.buscarPorId(id);
        if (existente != null) {
            existente.setNome(funcionario.getNome());
            existente.setDataNascimento(funcionario.getDataNascimento());
            existente.setSalario(funcionario.getSalario());
            return funcionarioService.salvar(existente);
        }
        return null;
    }
}
