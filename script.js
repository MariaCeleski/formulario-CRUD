 <script>

        // variáveis principais
        var nome = []
        var snome = []
        var idade = []
        var nomes = []
        var cpf = []
        var mira = -1
       

        // variáveis pra facilitar a minha vida que tá precisando de facilidades
        // atalhos para os elementos da página
        var entNome = document.getElementById("inpNome")
        var entSobrenome = document.getElementById("inpSobrenome")
        var entIdade = document.getElementById("inpIdade")
        var entCpf = document.getElementById("inpCpf")
        var saida = document.getElementById("divSaida")



        // funções principais
        function cadastrar() {
            nome[nome.length] = entNome.value
            snome[snome.length] = entSobrenome.value
            idade[idade.length] = entIdade.value
            cpf[cpf.length] = entCpf.value

            entNome.value = ""            
            entSobrenome.value = ""
            entIdade.value = ""
            entCpf.value = ""

            atualizaRegistrosNaPagina()
                      
        }

        function replicar() {

            var cadNome = ["José Ricardo", "João Augusto", "Maria Aparecida", "Jesus Gabriel", "Gustavo Junior", "Igor José", "Yuri João", "Matheus Sergio", "Rafaela Maria", "Leonardo Davincci", "Marley", "Ana", "Nicolas",
                "Joaquim Nabuco", "Bianca Rosa", "Rosangela Ferro", "Martin Ariel", "Gabriela Paolla", "Micael Murilo", "Leticia Carla", "Josué Antonio"]

            var cadSNome = ["Almeida", "Rosa", "Martins", "Jesus", "Silva", "Arantes", "Santos", "Matheus", "Souza", "Leonardo", "Almeida", "Amorim", "Moraes",
                "Joaquim", "Blanco", "Rosa", "Martin", "Duarte", "Mira", "Leite", "Josué"]

            var cadIdade = ["15", "18", "14", "36", "48", "25", "29", "32", "48", "40", "58", "63", "67",
                "51", "55", "46", "42", "33", "29", "21"]

            var cadCpf = ["469.590.448-98", "834.865.978-17", "871.097.341-96", "568.582.830-64", "172.918.368-91", "763.673.037-58", "901.217.300-00", "542.483.469-82", "636.540.427-16", "233.386.402-85","995.094.336-16", "283.863.249-37", "764.899.781-99", "597.816.511-48", "021.095.364-03", "233.814.583-61", "571.180.093-00", "365.822.585-83", "215.068.530-21", "994.540.203-07"]


            var alteraCadastro = Math.ceil(Math.random() * 15) + 5
            alteraCadastro += nome.length

            var atributoDados
            for (i = nome.length; i < alteraCadastro; i++) {
                
                atributoDados = Math.floor(Math.random() * cadNome.length)
                nome[i] = cadNome[atributoDados]
                
                atributoDados = Math.floor(Math.random() * cadSNome.length)
                snome[i] = cadSNome[atributoDados]
                
                atributoDados = Math.floor(Math.random() * cadIdade.length)
                idade[i] = cadIdade[atributoDados]

                atributoDados = Math.floor(Math.random() * cadCpf.length)
                cpf[i] = cadCpf[atributoDados]
                
            }
            atualizaRegistrosNaPagina()
        }

        // funções secundárias 
        function atualizaRegistrosNaPagina() {
            saida.innerHTML = "INFORMAÇÕES<br>"

            for (i = 0; i < nome.length; i++) {
                var nomeIdade = { nome: nome[i], snome: snome[i], idade: idade[i], cpf: cpf[i]}                
                saida.innerHTML += "<b><br>Nome:</b>" + nome[i] + "<br>"
                saida.innerHTML += "<b><br>Sobrenome:</b>" + snome[i] + "<br>"
                saida.innerHTML += "<b><br>Idade:</b>" + idade[i] + "<br>"
                saida.innerHTML += "<b><br> CPF:</b>" + cpf[i] + "<br>"
            }
        }
        
        function salvar()
        {
            nome[mira] = entNome.value
            snome[mira] = entSobrenome.value
            idade[mira] = entIdade.value
            cpf[mira] = entCpf.value
            mira = -1
        }

        atualizaRegistrosNaPagina()

        function pesquisarPorNome()
        {
            var nomeProcurado = entNome.value
            mira = nome.indexOf(nomeProcurado)
            if(mira!= -1)
            {
                entNome.value = nome[mira]
                entSobrenome.value = snome[mira]
                entIdade.value = idade[mira]
                entCpf.value = cpf[mira]
            }
            else
            {
                alert("Nome não encontrado")
            }
        }

        function pesquisarPorSobrenome()
        {
            var snomeProcurado = entSobrenome.value
            mira = snome.indexOf(snomeProcurado)
            if(mira!= -1)
            {
                entSobrenome.value = snome[mira]
                entNome.value = nome[mira]
                entIdade.value = idade[mira]
                entCpf.value = cpf[mira]
            }
            else
            {
                alert("Sobrenome não encontrado")
            }
        }

        function pesquisarPorIdade()
        {
            var idadeProcurada = entIdade.value
            mira = idade.indexOf(idadeProcurada)
            if(mira!= -1)
            {
                entIdade.value = idade[mira]
                entNome.value = nome[mira]
                entSobrenome.value = snome[mira]
                entCpf.value = cpf[mira]
            }
            else
            {
                alert("Idade não encontrada")
            }
        }

        atualizaRegistrosNaPagina()

        
        function editarRegistro()
        
        {
            if( entNome.value !="" &&  entSobrenome.value !="" && entIdade.value !="" && entCpf.value !="")
            {
                nome[mira] = entNome.value
                snome[mira] = entSobrenome.value
                idade[mira] = entIdade.value
                cpf[mira] = entCpf.value

                entNome.value = ""            
                entSobrenome.value = ""
                entIdade.value = ""
                entCpf.value = ""
                
        atualizaRegistrosNaPagina()
                alert("Edição efetuada com sucesso!")

            }
            else
            {
                alert("Edição não efetuada")
            }
        }
      
        function deletarRegistro()
        
        {  
            var del = Number(prompt('Digite a idade da pessoa (pesquisada) à ser deletada'))

            if(!confirm('Você tem certeza que deseja deletar esses dados, aperte OK.')) return false

            for (i = 0; i < nome.length; i++) {
            
               {
                    nome.splice(mira, 1)
                    snome.splice(mira, 1)
                    idade.splice(mira, 1)
                    cpf.splice(mira, 1)

                    entNome.value = ""            
                    entSobrenome.value = ""
                    entIdade.value = ""
                    entCpf.value = ""
                }
            }
            atualizaRegistrosNaPagina()

            alert("Dados excluídos com sucesso! Aperte no OK")
            
        }
        
    </script>
