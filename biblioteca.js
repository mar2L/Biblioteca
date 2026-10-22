<script> function entrar()
    {const usuario = document.getElementById("usuario").value;    
    const senha = document.getElementById("senha").value;  
      if (usuario === "aluno" && senha === "1234") 
        {Swal.fire("Sucesso", "Login realizado!", "success");  

          } else {       
             Swal.fire("Erro", "Usuário ou senha incorretos", "error");   
             } } </script>