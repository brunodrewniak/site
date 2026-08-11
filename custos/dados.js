/*
 conta, nome, descricao, nivel, analitico



*/
const DATA = 
[
  {
    "conta": "0002.0000.0000.0000.0000.0000.0000.0000.0000.0000",
    "nome": " PODER EXECUTIVO MUNICIPAL DE CAMPO LARGO - PR",
    "descricao": "",
    "nivel": "1",
    "analitico": "Não",
    "Objeto de Custo Pai - Ano da Loa": "",
    "Objeto de Custo Pai - Código": ""
  },
  {
    "conta": "0002.0010.0000.0000.0000.0000.0000.0000.0000.0000",
    "nome": "SECRETARIA MUNICIPAL DE EDUCAÇÃO",
    "descricao": "",
    "nivel": "2",
    "analitico": "Não",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "1"
  },
  {
    "conta": "0002.0010.0011.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Educação de Jovens e Adultos - EJA",
    "descricao": "",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "11"
  },
  {
    "conta": "0002.0010.0012.0000.0000.0000.0000.0000.0000.0000",
    "nome": "ERCE",
    "descricao": "",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "11"
  },
  {
    "conta": "0002.0010.0001.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Manutenção e Funcionamento da Educação",
    "descricao": "Contempla as atividades de organização e gestão da secretaria, englobando recursos humanos.",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "11"
  },
  {
    "conta": "0002.0010.0002.0000.0000.0000.0000.0000.0000.0000",
    "nome": "(CMEI's)",
    "descricao": "Contempla as atividades de organização e gestão da secretaria, englobando recursos humanos.",
    "nivel": "3",
    "analitico": "Não",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "11"
  },
  {
    "conta": "0002.0010.0002.0010.0000.0000.0000.0000.0000.0000",
    "nome": "CMEI Maria da Luz Rossa",
    "descricao": "Instituição pública que engloba tanto a creche (crianças de 0 a 3/4 anos, foco em cuidado e desenvolvimento inicial) quanto a pré-escola (crianças de 4 a 5/6 anos, foco na preparação para o ensino fundamental), oferecendo uma jornada completa de Educação Infantil com atividades pedagógicas e lúdicas.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "39"
  },
  {
    "conta": "0002.0010.0002.0011.0000.0000.0000.0000.0000.0000",
    "nome": "CMEI Maria de Jesus Ferreira",
    "descricao": "Instituição pública que engloba tanto a creche (crianças de 0 a 3/4 anos, foco em cuidado e desenvolvimento inicial) quanto a pré-escola (crianças de 4 a 5/6 anos, foco na preparação para o ensino fundamental), oferecendo uma jornada completa de Educação Infantil com atividades pedagógicas e lúdicas.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "39"
  },
  {
    "conta": "0002.0010.0002.0001.0000.0000.0000.0000.0000.0000",
    "nome": "CMEI Alessandre Rettmann",
    "descricao": "Instituição pública que engloba tanto a creche (crianças de 0 a 3/4 anos, foco em cuidado e desenvolvimento inicial) quanto a pré-escola (crianças de 4 a 5/6 anos, foco na preparação para o ensino fundamental), oferecendo uma jornada completa de Educação Infantil com atividades pedagógicas e lúdicas.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "39"
  },
  {
    "conta": "0002.0010.0002.0012.0000.0000.0000.0000.0000.0000",
    "nome": "CMEI Maria Rivabén",
    "descricao": "Instituição pública que engloba tanto a creche (crianças de 0 a 3/4 anos, foco em cuidado e desenvolvimento inicial) quanto a pré-escola (crianças de 4 a 5/6 anos, foco na preparação para o ensino fundamental), oferecendo uma jornada completa de Educação Infantil com atividades pedagógicas e lúdicas.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "39"
  },
  {
    "conta": "0002.0010.0002.0013.0000.0000.0000.0000.0000.0000",
    "nome": "CMEI Mariinha",
    "descricao": "Instituição pública que engloba tanto a creche (crianças de 0 a 3/4 anos, foco em cuidado e desenvolvimento inicial) quanto a pré-escola (crianças de 4 a 5/6 anos, foco na preparação para o ensino fundamental), oferecendo uma jornada completa de Educação Infantil com atividades pedagógicas e lúdicas.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "39"
  },
  {
    "conta": "0002.0010.0002.0014.0000.0000.0000.0000.0000.0000",
    "nome": "CMEI Marilene Domingas Rivabem Sphair",
    "descricao": "Instituição pública que engloba tanto a creche (crianças de 0 a 3/4 anos, foco em cuidado e desenvolvimento inicial) quanto a pré-escola (crianças de 4 a 5/6 anos, foco na preparação para o ensino fundamental), oferecendo uma jornada completa de Educação Infantil com atividades pedagógicas e lúdicas.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "39"
  },
  {
    "conta": "0002.0010.0002.0015.0000.0000.0000.0000.0000.0000",
    "nome": "CMEI Menino Deus",
    "descricao": "Instituição pública que engloba tanto a creche (crianças de 0 a 3/4 anos, foco em cuidado e desenvolvimento inicial) quanto a pré-escola (crianças de 4 a 5/6 anos, foco na preparação para o ensino fundamental), oferecendo uma jornada completa de Educação Infantil com atividades pedagógicas e lúdicas.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "39"
  },
  {
    "conta": "0002.0010.0002.0016.0000.0000.0000.0000.0000.0000",
    "nome": "CMEI Monteiro Lobato",
    "descricao": "Instituição pública que engloba tanto a creche (crianças de 0 a 3/4 anos, foco em cuidado e desenvolvimento inicial) quanto a pré-escola (crianças de 4 a 5/6 anos, foco na preparação para o ensino fundamental), oferecendo uma jornada completa de Educação Infantil com atividades pedagógicas e lúdicas.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "39"
  },
  {
    "conta": "0002.0010.0002.0017.0000.0000.0000.0000.0000.0000",
    "nome": "CMEI Odila Portugal Castagnoli",
    "descricao": "Instituição pública que engloba tanto a creche (crianças de 0 a 3/4 anos, foco em cuidado e desenvolvimento inicial) quanto a pré-escola (crianças de 4 a 5/6 anos, foco na preparação para o ensino fundamental), oferecendo uma jornada completa de Educação Infantil com atividades pedagógicas e lúdicas.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "39"
  },
  {
    "conta": "0002.0010.0002.0018.0000.0000.0000.0000.0000.0000",
    "nome": "CMEI Ouro Verde",
    "descricao": "Instituição pública que engloba tanto a creche (crianças de 0 a 3/4 anos, foco em cuidado e desenvolvimento inicial) quanto a pré-escola (crianças de 4 a 5/6 anos, foco na preparação para o ensino fundamental), oferecendo uma jornada completa de Educação Infantil com atividades pedagógicas e lúdicas.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "39"
  },
  {
    "conta": "0002.0010.0002.0019.0000.0000.0000.0000.0000.0000",
    "nome": "CMEI Renato Hoft",
    "descricao": "Instituição pública que engloba tanto a creche (crianças de 0 a 3/4 anos, foco em cuidado e desenvolvimento inicial) quanto a pré-escola (crianças de 4 a 5/6 anos, foco na preparação para o ensino fundamental), oferecendo uma jornada completa de Educação Infantil com atividades pedagógicas e lúdicas.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "39"
  },
  {
    "conta": "0002.0010.0002.0020.0000.0000.0000.0000.0000.0000",
    "nome": "CMEI Rudolf Anton Michael Göhringer",
    "descricao": "Instituição pública que engloba tanto a creche (crianças de 0 a 3/4 anos, foco em cuidado e desenvolvimento inicial) quanto a pré-escola (crianças de 4 a 5/6 anos, foco na preparação para o ensino fundamental), oferecendo uma jornada completa de Educação Infantil com atividades pedagógicas e lúdicas.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "39"
  },
  {
    "conta": "0002.0010.0002.0021.0000.0000.0000.0000.0000.0000",
    "nome": "CMEI Victor de Almeida Barbosa",
    "descricao": "Instituição pública que engloba tanto a creche (crianças de 0 a 3/4 anos, foco em cuidado e desenvolvimento inicial) quanto a pré-escola (crianças de 4 a 5/6 anos, foco na preparação para o ensino fundamental), oferecendo uma jornada completa de Educação Infantil com atividades pedagógicas e lúdicas.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "39"
  },
  {
    "conta": "0002.0010.0002.0002.0000.0000.0000.0000.0000.0000",
    "nome": "CMEI Antonio Gabardo Júnior",
    "descricao": "Instituição pública que engloba tanto a creche (crianças de 0 a 3/4 anos, foco em cuidado e desenvolvimento inicial) quanto a pré-escola (crianças de 4 a 5/6 anos, foco na preparação para o ensino fundamental), oferecendo uma jornada completa de Educação Infantil com atividades pedagógicas e lúdicas.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "39"
  },
  {
    "conta": "0002.0010.0002.0022.0000.0000.0000.0000.0000.0000",
    "nome": "CMEI Claudete Vieira Andreassa",
    "descricao": "Instituição pública que engloba tanto a creche (crianças de 0 a 3/4 anos, foco em cuidado e desenvolvimento inicial) quanto a pré-escola (crianças de 4 a 5/6 anos, foco na preparação para o ensino fundamental), oferecendo uma jornada completa de Educação Infantil com atividades pedagógicas e lúdicas.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "39"
  },
  {
    "conta": "0002.0010.0002.0003.0000.0000.0000.0000.0000.0000",
    "nome": "CMEI Padre Boleslau Liana",
    "descricao": "Instituição pública que engloba tanto a creche (crianças de 0 a 3/4 anos, foco em cuidado e desenvolvimento inicial) quanto a pré-escola (crianças de 4 a 5/6 anos, foco na preparação para o ensino fundamental), oferecendo uma jornada completa de Educação Infantil com atividades pedagógicas e lúdicas.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "39"
  },
  {
    "conta": "0002.0010.0002.0004.0000.0000.0000.0000.0000.0000",
    "nome": "CMEI Colibri",
    "descricao": "Instituição pública que engloba tanto a creche (crianças de 0 a 3/4 anos, foco em cuidado e desenvolvimento inicial) quanto a pré-escola (crianças de 4 a 5/6 anos, foco na preparação para o ensino fundamental), oferecendo uma jornada completa de Educação Infantil com atividades pedagógicas e lúdicas.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "39"
  },
  {
    "conta": "0002.0010.0002.0005.0000.0000.0000.0000.0000.0000",
    "nome": "CMEI Criança Esperança",
    "descricao": "Instituição pública que engloba tanto a creche (crianças de 0 a 3/4 anos, foco em cuidado e desenvolvimento inicial) quanto a pré-escola (crianças de 4 a 5/6 anos, foco na preparação para o ensino fundamental), oferecendo uma jornada completa de Educação Infantil com atividades pedagógicas e lúdicas.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "39"
  },
  {
    "conta": "0002.0010.0002.0006.0000.0000.0000.0000.0000.0000",
    "nome": "CMEI Curumim",
    "descricao": "Instituição pública que engloba tanto a creche (crianças de 0 a 3/4 anos, foco em cuidado e desenvolvimento inicial) quanto a pré-escola (crianças de 4 a 5/6 anos, foco na preparação para o ensino fundamental), oferecendo uma jornada completa de Educação Infantil com atividades pedagógicas e lúdicas.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "39"
  },
  {
    "conta": "0002.0010.0002.0007.0000.0000.0000.0000.0000.0000",
    "nome": "CMEI Dedé Mocellin",
    "descricao": "Instituição pública que engloba tanto a creche (crianças de 0 a 3/4 anos, foco em cuidado e desenvolvimento inicial) quanto a pré-escola (crianças de 4 a 5/6 anos, foco na preparação para o ensino fundamental), oferecendo uma jornada completa de Educação Infantil com atividades pedagógicas e lúdicas.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "39"
  },
  {
    "conta": "0002.0010.0002.0008.0000.0000.0000.0000.0000.0000",
    "nome": "CMEI Gente Miúda",
    "descricao": "Instituição pública que engloba tanto a creche (crianças de 0 a 3/4 anos, foco em cuidado e desenvolvimento inicial) quanto a pré-escola (crianças de 4 a 5/6 anos, foco na preparação para o ensino fundamental), oferecendo uma jornada completa de Educação Infantil com atividades pedagógicas e lúdicas.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "39"
  },
  {
    "conta": "0002.0010.0002.0009.0000.0000.0000.0000.0000.0000",
    "nome": "CMEI Irmã Dolores",
    "descricao": "Instituição pública que engloba tanto a creche (crianças de 0 a 3/4 anos, foco em cuidado e desenvolvimento inicial) quanto a pré-escola (crianças de 4 a 5/6 anos, foco na preparação para o ensino fundamental), oferecendo uma jornada completa de Educação Infantil com atividades pedagógicas e lúdicas.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "39"
  },
  {
    "conta": "0002.0010.0003.0000.0000.0000.0000.0000.0000.0000",
    "nome": " Ens. Fund. e lnfantil (Pré-Escola)",
    "descricao": "Contempla as atividades de organização e gestão da secretaria, englobando recursos humanos.",
    "nivel": "3",
    "analitico": "Não",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "11"
  },
  {
    "conta": "0002.0010.0003.0010.0000.0000.0000.0000.0000.0000",
    "nome": "Escola Municipal Integração Comunitária",
    "descricao": "Instituição pública, mantida pela prefeitura, que oferece a educação básica obrigatória (do 1º ao 9º ano), focada no desenvolvimento integral do aluno, ensinando habilidades essenciais.como leitura, escrita, matemática, ciências, história e geografia, preparando-os para a vida em sociedade e para os próximos níveis de ensino.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "40"
  },
  {
    "conta": "0002.0010.0003.0011.0000.0000.0000.0000.0000.0000",
    "nome": "Escola Municipal João Santana",
    "descricao": "Instituição pública, mantida pela prefeitura, que oferece a educação básica obrigatória (do 1º ao 9º ano), focada no desenvolvimento integral do aluno, ensinando habilidades essenciais.como leitura, escrita, matemática, ciências, história e geografia, preparando-os para a vida em sociedade e para os próximos níveis de ensino.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "40"
  },
  {
    "conta": "0002.0010.0003.0001.0000.0000.0000.0000.0000.0000",
    "nome": "Escola Municipal Affonso Augusto da Cunha Filho",
    "descricao": "Instituição pública, mantida pela prefeitura, que oferece a educação básica obrigatória (do 1º ao 9º ano), focada no desenvolvimento integral do aluno, ensinando habilidades essenciais.como leitura, escrita, matemática, ciências, história e geografia, preparando-os para a vida em sociedade e para os próximos níveis de ensino.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "40"
  },
  {
    "conta": "0002.0010.0003.0012.0000.0000.0000.0000.0000.0000",
    "nome": "Escola Municipal José Alexandre Sávio",
    "descricao": "Instituição pública, mantida pela prefeitura, que oferece a educação básica obrigatória (do 1º ao 9º ano), focada no desenvolvimento integral do aluno, ensinando habilidades essenciais.como leitura, escrita, matemática, ciências, história e geografia, preparando-os para a vida em sociedade e para os próximos níveis de ensino.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "40"
  },
  {
    "conta": "0002.0010.0003.0013.0000.0000.0000.0000.0000.0000",
    "nome": "Escola Municipal Luiz Júlio",
    "descricao": "Instituição pública, mantida pela prefeitura, que oferece a educação básica obrigatória (do 1º ao 9º ano), focada no desenvolvimento integral do aluno, ensinando habilidades essenciais.como leitura, escrita, matemática, ciências, história e geografia, preparando-os para a vida em sociedade e para os próximos níveis de ensino.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "40"
  },
  {
    "conta": "0002.0010.0003.0014.0000.0000.0000.0000.0000.0000",
    "nome": "Escola Municipal Luíza Gonçalves Montei",
    "descricao": "Instituição pública, mantida pela prefeitura, que oferece a educação básica obrigatória (do 1º ao 9º ano), focada no desenvolvimento integral do aluno, ensinando habilidades essenciais.como leitura, escrita, matemática, ciências, história e geografia, preparando-os para a vida em sociedade e para os próximos níveis de ensino.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "40"
  },
  {
    "conta": "0002.0010.0003.0015.0000.0000.0000.0000.0000.0000",
    "nome": "Escola Municipal Maria Joana Ferreira Marochi",
    "descricao": "Instituição pública, mantida pela prefeitura, que oferece a educação básica obrigatória (do 1º ao 9º ano), focada no desenvolvimento integral do aluno, ensinando habilidades essenciais.como leitura, escrita, matemática, ciências, história e geografia, preparando-os para a vida em sociedade e para os próximos níveis de ensino.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "40"
  },
  {
    "conta": "0002.0010.0003.0016.0000.0000.0000.0000.0000.0000",
    "nome": "Escola Municipal Madalena Portella",
    "descricao": "Instituição pública, mantida pela prefeitura, que oferece a educação básica obrigatória (do 1º ao 9º ano), focada no desenvolvimento integral do aluno, ensinando habilidades essenciais.como leitura, escrita, matemática, ciências, história e geografia, preparando-os para a vida em sociedade e para os próximos níveis de ensino.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "40"
  },
  {
    "conta": "0002.0010.0003.0017.0000.0000.0000.0000.0000.0000",
    "nome": "Escola Municipal Mauro Portugal",
    "descricao": "Instituição pública, mantida pela prefeitura, que oferece a educação básica obrigatória (do 1º ao 9º ano), focada no desenvolvimento integral do aluno, ensinando habilidades essenciais.como leitura, escrita, matemática, ciências, história e geografia, preparando-os para a vida em sociedade e para os próximos níveis de ensino.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "40"
  },
  {
    "conta": "0002.0010.0003.0018.0000.0000.0000.0000.0000.0000",
    "nome": "Escola Municipal Monsenhor Ivo Zanlorenzi",
    "descricao": "Instituição pública, mantida pela prefeitura, que oferece a educação básica obrigatória (do 1º ao 9º ano), focada no desenvolvimento integral do aluno, ensinando habilidades essenciais.como leitura, escrita, matemática, ciências, história e geografia, preparando-os para a vida em sociedade e para os próximos níveis de ensino.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "40"
  },
  {
    "conta": "0002.0010.0003.0019.0000.0000.0000.0000.0000.0000",
    "nome": "Escola Municipal O Ateneu",
    "descricao": "Instituição pública, mantida pela prefeitura, que oferece a educação básica obrigatória (do 1º ao 9º ano), focada no desenvolvimento integral do aluno, ensinando habilidades essenciais.como leitura, escrita, matemática, ciências, história e geografia, preparando-os para a vida em sociedade e para os próximos níveis de ensino.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "40"
  },
  {
    "conta": "0002.0010.0003.0020.0000.0000.0000.0000.0000.0000",
    "nome": "Escola Municipal Padre Natal Pigatto",
    "descricao": "Instituição pública, mantida pela prefeitura, que oferece a educação básica obrigatória (do 1º ao 9º ano), focada no desenvolvimento integral do aluno, ensinando habilidades essenciais.como leitura, escrita, matemática, ciências, história e geografia, preparando-os para a vida em sociedade e para os próximos níveis de ensino.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "40"
  },
  {
    "conta": "0002.0010.0003.0021.0000.0000.0000.0000.0000.0000",
    "nome": "Escola Municipal Pedro Kaminsk",
    "descricao": "Instituição pública, mantida pela prefeitura, que oferece a educação básica obrigatória (do 1º ao 9º ano), focada no desenvolvimento integral do aluno, ensinando habilidades essenciais.como leitura, escrita, matemática, ciências, história e geografia, preparando-os para a vida em sociedade e para os próximos níveis de ensino.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "40"
  },
  {
    "conta": "0002.0010.0003.0002.0000.0000.0000.0000.0000.0000",
    "nome": "Escola Municipal Albina Grigoletti Winheski",
    "descricao": "Instituição pública, mantida pela prefeitura, que oferece a educação básica obrigatória (do 1º ao 9º ano), focada no desenvolvimento integral do aluno, ensinando habilidades essenciais.como leitura, escrita, matemática, ciências, história e geografia, preparando-os para a vida em sociedade e para os próximos níveis de ensino.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "40"
  },
  {
    "conta": "0002.0010.0003.0022.0000.0000.0000.0000.0000.0000",
    "nome": "Escola Municipal Policarpo Miranda",
    "descricao": "Instituição pública, mantida pela prefeitura, que oferece a educação básica obrigatória (do 1º ao 9º ano), focada no desenvolvimento integral do aluno, ensinando habilidades essenciais.como leitura, escrita, matemática, ciências, história e geografia, preparando-os para a vida em sociedade e para os próximos níveis de ensino.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "40"
  },
  {
    "conta": "0002.0010.0003.0023.0000.0000.0000.0000.0000.0000",
    "nome": "Escola Municipal Primeiro de Maio",
    "descricao": "Instituição pública, mantida pela prefeitura, que oferece a educação básica obrigatória (do 1º ao 9º ano), focada no desenvolvimento integral do aluno, ensinando habilidades essenciais.como leitura, escrita, matemática, ciências, história e geografia, preparando-os para a vida em sociedade e para os próximos níveis de ensino.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "40"
  },
  {
    "conta": "0002.0010.0003.0024.0000.0000.0000.0000.0000.0000",
    "nome": "Escola Municipal Professora Lenovi de Almeida Torres",
    "descricao": "Instituição pública, mantida pela prefeitura, que oferece a educação básica obrigatória (do 1º ao 9º ano), focada no desenvolvimento integral do aluno, ensinando habilidades essenciais.como leitura, escrita, matemática, ciências, história e geografia, preparando-os para a vida em sociedade e para os próximos níveis de ensino.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "40"
  },
  {
    "conta": "0002.0010.0003.0025.0000.0000.0000.0000.0000.0000",
    "nome": "Escola Municipal Professora Alméde Baridotti Galdino",
    "descricao": "Instituição pública, mantida pela prefeitura, que oferece a educação básica obrigatória (do 1º ao 9º ano), focada no desenvolvimento integral do aluno, ensinando habilidades essenciais.como leitura, escrita, matemática, ciências, história e geografia, preparando-os para a vida em sociedade e para os próximos níveis de ensino.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "40"
  },
  {
    "conta": "0002.0010.0003.0026.0000.0000.0000.0000.0000.0000",
    "nome": "Escola Municipal XV de Outubro",
    "descricao": "Instituição pública, mantida pela prefeitura, que oferece a educação básica obrigatória (do 1º ao 9º ano), focada no desenvolvimento integral do aluno, ensinando habilidades essenciais.como leitura, escrita, matemática, ciências, história e geografia, preparando-os para a vida em sociedade e para os próximos níveis de ensino.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "40"
  },
  {
    "conta": "0002.0010.0003.0027.0000.0000.0000.0000.0000.0000",
    "nome": "Escola Municipal Reino da Loucinha",
    "descricao": "Instituição pública, mantida pela prefeitura, que oferece a educação básica obrigatória (do 1º ao 9º ano), focada no desenvolvimento integral do aluno, ensinando habilidades essenciais.como leitura, escrita, matemática, ciências, história e geografia, preparando-os para a vida em sociedade e para os próximos níveis de ensino.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "40"
  },
  {
    "conta": "0002.0010.0003.0028.0000.0000.0000.0000.0000.0000",
    "nome": "Escola Municipal Rosália Andrade Remonato",
    "descricao": "Instituição pública, mantida pela prefeitura, que oferece a educação básica obrigatória (do 1º ao 9º ano), focada no desenvolvimento integral do aluno, ensinando habilidades essenciais.como leitura, escrita, matemática, ciências, história e geografia, preparando-os para a vida em sociedade e para os próximos níveis de ensino.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "40"
  },
  {
    "conta": "0002.0010.0003.0029.0000.0000.0000.0000.0000.0000",
    "nome": "Escola Municipal Sete de Setembro",
    "descricao": "Instituição pública, mantida pela prefeitura, que oferece a educação básica obrigatória (do 1º ao 9º ano), focada no desenvolvimento integral do aluno, ensinando habilidades essenciais.como leitura, escrita, matemática, ciências, história e geografia, preparando-os para a vida em sociedade e para os próximos níveis de ensino.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "40"
  },
  {
    "conta": "0002.0010.0003.0030.0000.0000.0000.0000.0000.0000",
    "nome": "Escola Municipal Vereador José Andreassa",
    "descricao": "Instituição pública, mantida pela prefeitura, que oferece a educação básica obrigatória (do 1º ao 9º ano), focada no desenvolvimento integral do aluno, ensinando habilidades essenciais.como leitura, escrita, matemática, ciências, história e geografia, preparando-os para a vida em sociedade e para os próximos níveis de ensino.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "40"
  },
  {
    "conta": "0002.0010.0003.0031.0000.0000.0000.0000.0000.0000",
    "nome": "Escola Municipal Anchieta",
    "descricao": "Instituição pública, mantida pela prefeitura, que oferece a educação básica obrigatória (do 1º ao 9º ano), focada no desenvolvimento integral do aluno, ensinando habilidades essenciais.como leitura, escrita, matemática, ciências, história e geografia, preparando-os para a vida em sociedade e para os próximos níveis de ensino.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "40"
  },
  {
    "conta": "0002.0010.0003.0003.0000.0000.0000.0000.0000.0000",
    "nome": "Escola Municipal Anderson Paulart Junior",
    "descricao": "Instituição pública, mantida pela prefeitura, que oferece a educação básica obrigatória (do 1º ao 9º ano), focada no desenvolvimento integral do aluno, ensinando habilidades essenciais.como leitura, escrita, matemática, ciências, história e geografia, preparando-os para a vida em sociedade e para os próximos níveis de ensino.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "40"
  },
  {
    "conta": "0002.0010.0003.0032.0000.0000.0000.0000.0000.0000",
    "nome": "N.U - Escola Municipal Solidariedade",
    "descricao": "Instituição pública, mantida pela prefeitura, que oferece a educação básica obrigatória (do 1º ao 9º ano), focada no desenvolvimento integral do aluno, ensinando habilidades essenciais.como leitura, escrita, matemática, ciências, história e geografia, preparando-os para a vida em sociedade e para os próximos níveis de ensino.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "40"
  },
  {
    "conta": "0002.0010.0003.0033.0000.0000.0000.0000.0000.0000",
    "nome": "N.U - Escola Municipal Augusto Pires de Paula",
    "descricao": "Instituição pública, mantida pela prefeitura, que oferece a educação básica obrigatória (do 1º ao 9º ano), focada no desenvolvimento integral do aluno, ensinando habilidades essenciais.como leitura, escrita, matemática, ciências, história e geografia, preparando-os para a vida em sociedade e para os próximos níveis de ensino.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "40"
  },
  {
    "conta": "0002.0010.0003.0035.0000.0000.0000.0000.0000.0000",
    "nome": "N.U - Escola de Campo Nicolau Moraes de Castro",
    "descricao": "A escola do campo funciona de forma contextualizada, integrando o aprendizado formal com a realidade rural, valorizando a cultura local e as atividades agrícolas através de projetos práticos como hortas, e promovendo o diálogo entre saberes tradicionais e acadêmicos para fortalecer a identidade e o desenvolvimento das comunidades rurais,",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "40"
  },
  {
    "conta": "0002.0010.0003.0036.0000.0000.0000.0000.0000.0000",
    "nome": "N.U - Escola de Campo  Luiz Rivabem",
    "descricao": "A escola do campo funciona de forma contextualizada, integrando o aprendizado formal com a realidade rural, valorizando a cultura local e as atividades agrícolas através de projetos práticos como hortas, e promovendo o diálogo entre saberes tradicionais e acadêmicos para fortalecer a identidade e o desenvolvimento das comunidades rurais,",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "40"
  },
  {
    "conta": "0002.0010.0003.0037.0000.0000.0000.0000.0000.0000",
    "nome": "N.U - Escola  São Pedro",
    "descricao": "A escola do campo funciona de forma contextualizada, integrando o aprendizado formal com a realidade rural, valorizando a cultura local e as atividades agrícolas através de projetos práticos como hortas, e promovendo o diálogo entre saberes tradicionais e acadêmicos para fortalecer a identidade e o desenvolvimento das comunidades rurais,",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "40"
  },
  {
    "conta": "0002.0010.0003.0004.0000.0000.0000.0000.0000.0000",
    "nome": "Escola Municipal Caetano Munhoz da Rocha",
    "descricao": "Instituição pública, mantida pela prefeitura, que oferece a educação básica obrigatória (do 1º ao 9º ano), focada no desenvolvimento integral do aluno, ensinando habilidades essenciais.como leitura, escrita, matemática, ciências, história e geografia, preparando-os para a vida em sociedade e para os próximos níveis de ensino.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "40"
  },
  {
    "conta": "0002.0010.0003.0005.0000.0000.0000.0000.0000.0000",
    "nome": "Escola Municipal Carlos Drummond de Andrade",
    "descricao": "Instituição pública, mantida pela prefeitura, que oferece a educação básica obrigatória (do 1º ao 9º ano), focada no desenvolvimento integral do aluno, ensinando habilidades essenciais.como leitura, escrita, matemática, ciências, história e geografia, preparando-os para a vida em sociedade e para os próximos níveis de ensino.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "40"
  },
  {
    "conta": "0002.0010.0003.0006.0000.0000.0000.0000.0000.0000",
    "nome": "Escola Municipal Diácono Edgard Marochi",
    "descricao": "Instituição pública, mantida pela prefeitura, que oferece a educação básica obrigatória (do 1º ao 9º ano), focada no desenvolvimento integral do aluno, ensinando habilidades essenciais.como leitura, escrita, matemática, ciências, história e geografia, preparando-os para a vida em sociedade e para os próximos níveis de ensino.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "40"
  },
  {
    "conta": "0002.0010.0003.0007.0000.0000.0000.0000.0000.0000",
    "nome": "Escola Municipal Diva Ferreira Reinke",
    "descricao": "Instituição pública, mantida pela prefeitura, que oferece a educação básica obrigatória (do 1º ao 9º ano), focada no desenvolvimento integral do aluno, ensinando habilidades essenciais.como leitura, escrita, matemática, ciências, história e geografia, preparando-os para a vida em sociedade e para os próximos níveis de ensino.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "40"
  },
  {
    "conta": "0002.0010.0003.0008.0000.0000.0000.0000.0000.0000",
    "nome": "Escola Municipal Dona Fina",
    "descricao": "Instituição pública, mantida pela prefeitura, que oferece a educação básica obrigatória (do 1º ao 9º ano), focada no desenvolvimento integral do aluno, ensinando habilidades essenciais.como leitura, escrita, matemática, ciências, história e geografia, preparando-os para a vida em sociedade e para os próximos níveis de ensino.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "40"
  },
  {
    "conta": "0002.0010.0003.0009.0000.0000.0000.0000.0000.0000",
    "nome": "Escola Municipal Hans Ernst Schmidt",
    "descricao": "Instituição pública, mantida pela prefeitura, que oferece a educação básica obrigatória (do 1º ao 9º ano), focada no desenvolvimento integral do aluno, ensinando habilidades essenciais.como leitura, escrita, matemática, ciências, história e geografia, preparando-os para a vida em sociedade e para os próximos níveis de ensino.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "40"
  },
  {
    "conta": "0002.0010.0005.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Educação Escolas do Campo",
    "descricao": "Contempla as atividades de organização e gestão da secretaria, englobando recursos humanos.",
    "nivel": "3",
    "analitico": "Não",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "11"
  },
  {
    "conta": "0002.0010.0005.0001.0000.0000.0000.0000.0000.0000",
    "nome": "Escola Municipal Augusto Pires de Paula",
    "descricao": "Instituição de ensino mantida pela prefeitura situada em área rural ou que atenda predominantemente populações camponesas na pré escola, ensino fundamental e especial.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "89"
  },
  {
    "conta": "0002.0010.0005.0002.0000.0000.0000.0000.0000.0000",
    "nome": "Escola Municipal do Campo Luiz Rivabém",
    "descricao": "Instituição de ensino mantida pela prefeitura situada em área rural ou que atenda predominantemente populações camponesas na pré escola, ensino fundamental e especial.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "89"
  },
  {
    "conta": "0002.0010.0005.0003.0000.0000.0000.0000.0000.0000",
    "nome": "Escola Municipal  Nicolau Morais de Castro",
    "descricao": "Instituição de ensino mantida pela prefeitura situada em área rural ou que atenda predominantemente populações camponesas na pré escola, ensino fundamental e especial.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "89"
  },
  {
    "conta": "0002.0010.0005.0004.0000.0000.0000.0000.0000.0000",
    "nome": "Escola Municipal do Campo São Pedro",
    "descricao": "Instituição de ensino mantida pela prefeitura situada em área rural ou que atenda predominantemente populações camponesas na pré escola, ensino fundamental e especial.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "89"
  },
  {
    "conta": "0002.0010.0005.0005.0000.0000.0000.0000.0000.0000",
    "nome": "Escola Municipal Solidariedade",
    "descricao": "",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "89"
  },
  {
    "conta": "0002.0010.0006.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Educação - Ensino Especial",
    "descricao": "Contempla as atividades de organização e gestão da secretaria, englobando recursos humanos.",
    "nivel": "3",
    "analitico": "Não",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "11"
  },
  {
    "conta": "0002.0010.0006.0001.0000.0000.0000.0000.0000.0000",
    "nome": "CEMAE Professora Lindamir Ribeiro",
    "descricao": "Atendimento a alunos com deficiência, oferecendo um currículo adaptado e integrado à realidade rural, com professores especializados e infraestrutura acessível para promover o desenvolvimento integral e a inclusão de crianças e jovens do interior.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "201"
  },
  {
    "conta": "0002.0010.0006.0002.0000.0000.0000.0000.0000.0000",
    "nome": "Escola Municipal Especial do Campo Professora Doraci R. Machado",
    "descricao": "Atendimento a alunos com deficiência, oferecendo um currículo adaptado e integrado à realidade rural, com professores especializados e infraestrutura acessível para promover o desenvolvimento integral e a inclusão de crianças e jovens do interior.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "201"
  },
  {
    "conta": "0002.0010.0006.0003.0000.0000.0000.0000.0000.0000",
    "nome": "Escola Municipal Especial Professora Neuza Jokinsen Barbosa",
    "descricao": "Atendimento a alunos com deficiência, oferecendo um currículo adaptado e integrado à realidade rural, com professores especializados e infraestrutura acessível para promover o desenvolvimento integral e a inclusão de crianças e jovens do interior.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "201"
  },
  {
    "conta": "0002.0010.0006.0004.0000.0000.0000.0000.0000.0000",
    "nome": "CEMAE Três Corregos",
    "descricao": "Atendimento a alunos com deficiência, oferecendo um currículo adaptado e integrado à realidade rural, com professores especializados e infraestrutura acessível para promover o desenvolvimento integral e a inclusão de crianças e jovens do interior.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "201"
  },
  {
    "conta": "0002.0010.0007.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Ensino - Educação à Distância",
    "descricao": "Contempla as atividades de organização e gestão da secretaria, englobando recursos humanos.",
    "nivel": "3",
    "analitico": "Não",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "11"
  },
  {
    "conta": "0002.0010.0007.0001.0000.0000.0000.0000.0000.0000",
    "nome": "Polo UAB",
    "descricao": "Modalidade de ensino que utiliza tecnologias da informação e comunicação (TICs) para mediar o processo de aprendizagem entre alunos e professores, sem a necessidade de presença física em um ambiente escolar tradicional.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "202"
  },
  {
    "conta": "0002.0010.0008.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Almoxarifado da Educação",
    "descricao": "Contempla as atividades de organização e gestão da secretaria, englobando tanto os materiais quanto o armazenamento e distribuição.",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "11"
  },
  {
    "conta": "0002.0010.0009.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Transporte Escolar",
    "descricao": "",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "11"
  },
  {
    "conta": "0002.0010.0010.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Centro Distribuição de Merenda Escolar",
    "descricao": "",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "11"
  },
  {
    "conta": "0002.0011.0000.0000.0000.0000.0000.0000.0000.0000",
    "nome": "SECRETARIA MUNICIPAL DE CULTURA E TURISMO",
    "descricao": "",
    "nivel": "2",
    "analitico": "Não",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "1"
  },
  {
    "conta": "0002.0011.0001.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Manutenção e Funcionamento da Cultura",
    "descricao": "Contempla as atividades de organização e gestão da secretaria, englobando Itens de Custo com serviços de terceiros - energia elétrica, água, internet, limpeza, vigilância, telefone, etc, e bens de consumo.",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "12"
  },
  {
    "conta": "0002.0011.0002.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Biblioteca Cidadã Odila Portugual Castagnoli",
    "descricao": "Contempla as atividades de organização e gestão da secretaria, englobando tanto recursos humanos quanto materiais.",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "12"
  },
  {
    "conta": "0002.0011.0003.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Biblioteca Vereador Osvaldo Andrade Zotto",
    "descricao": "Contempla as atividades de organização e gestão da secretaria, englobando tanto recursos humanos quanto materiais.",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "12"
  },
  {
    "conta": "0002.0011.0004.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Biblioteca Pública Municipal Dr. Francisco R. de Aze. Macedo",
    "descricao": "Contempla as atividades de organização e gestão da secretaria, englobando tanto recursos humanos quanto materiais.",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "12"
  },
  {
    "conta": "0002.0011.0005.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Casa da Cultura",
    "descricao": "Contempla as atividades de organização e gestão da secretaria, englobando tanto recursos humanos quanto materiais.",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "12"
  },
  {
    "conta": "0002.0011.0006.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Museu Historico",
    "descricao": "Contempla as atividades de organização e gestão da secretaria, englobando tanto recursos humanos quanto materiais.",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "12"
  },
  {
    "conta": "0002.0011.0007.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Centro Educ Unificado - CEU",
    "descricao": "Contempla as atividades de organização e gestão da secretaria, englobando tanto recursos humanos quanto materiais.",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "12"
  },
  {
    "conta": "0002.0001.0000.0000.0000.0000.0000.0000.0000.0000",
    "nome": "GABINETE DO PREFEITO",
    "descricao": "",
    "nivel": "2",
    "analitico": "Não",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "1"
  },
  {
    "conta": "0002.0001.0001.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Manutenção e Funcionamento do Gabinete do Prefeito",
    "descricao": "Contempla as atividades de organização e gestão da secretaria, englobando tanto recursos humanos quanto materiais.",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "2"
  },
  {
    "conta": "0002.0012.0000.0000.0000.0000.0000.0000.0000.0000",
    "nome": "SECRETARIA MUNICIPAL DA FAZENDA",
    "descricao": "",
    "nivel": "2",
    "analitico": "Não",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "1"
  },
  {
    "conta": "0002.0012.0001.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Manutenção e Funcionamento da Fazenda",
    "descricao": "Contempla as atividades de organização e gestão da secretaria, englobando Itens de Custo com serviços de terceiros - energia elétrica, água, internet, limpeza, vigilância, telefone, etc, e bens de consumo.",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "13"
  },
  {
    "conta": "0002.0012.0002.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Departamento de Contabilidade",
    "descricao": "",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "13"
  },
  {
    "conta": "0002.0012.0003.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Departamento do Tesouro",
    "descricao": "",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "13"
  },
  {
    "conta": "0002.0012.0004.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Departamento da Receita Municipal",
    "descricao": "",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "13"
  },
  {
    "conta": "0002.0012.0005.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Departamento de Planejamento e Controle Orçamentário",
    "descricao": "",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "13"
  },
  {
    "conta": "0002.0013.0000.0000.0000.0000.0000.0000.0000.0000",
    "nome": "SECRETARIA MUNICIPAL DA ORDEM PÚBLICA",
    "descricao": "",
    "nivel": "2",
    "analitico": "Não",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "1"
  },
  {
    "conta": "0002.0013.0001.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Manutenção e Funcionamento da Ordem Pública",
    "descricao": "Contempla as atividades de organização e gestão da secretaria, englobando Itens de Custo com serviços de terceiros - energia elétrica, água, internet, limpeza, vigilância, telefone, etc, e bens de consumo.",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "14"
  },
  {
    "conta": "0002.0013.0002.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Atividades Operacionais e Administrativas da Guarda Municipal",
    "descricao": "",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "14"
  },
  {
    "conta": "0002.0013.0004.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Atividades Operacionais e Administrativas do Departamento de Trânsito - DEPTRAN",
    "descricao": "",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "14"
  },
  {
    "conta": "0002.0013.0005.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Atividades Operacionais e Administrativas do PROCON",
    "descricao": "",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "14"
  },
  {
    "conta": "0002.0013.0006.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Atividades Operacionais e Administrativas do Transporte Público",
    "descricao": "",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "14"
  },
  {
    "conta": "0002.0013.0007.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Atividades Operacionais e Administrativas de Serviços Funerários",
    "descricao": "",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "14"
  },
  {
    "conta": "0002.0013.0008.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Atividades Operacionais e Administrativas do Atendimento ao Cidadão - CIAC",
    "descricao": "",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "14"
  },
  {
    "conta": "0002.0013.0009.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Atividades Operacionais e Administrativas do Tiro de Guerra",
    "descricao": "",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "14"
  },
  {
    "conta": "0002.0014.0000.0000.0000.0000.0000.0000.0000.0000",
    "nome": "SECRETARIA MUNICIPAL DA SAÚDE",
    "descricao": "",
    "nivel": "2",
    "analitico": "Não",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "1"
  },
  {
    "conta": "0002.0014.0032.0000.0000.0000.0000.0000.0000.0000",
    "nome": "UBS",
    "descricao": "",
    "nivel": "3",
    "analitico": "Não",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "15"
  },
  {
    "conta": "0002.0014.0032.0011.0000.0000.0000.0000.0000.0000",
    "nome": "UBS Rondinha",
    "descricao": "",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "225"
  },
  {
    "conta": "0002.0014.0032.0012.0000.0000.0000.0000.0000.0000",
    "nome": "UBS Cercadinho",
    "descricao": "",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "225"
  },
  {
    "conta": "0002.0014.0032.0001.0000.0000.0000.0000.0000.0000",
    "nome": "UBS'S",
    "descricao": "",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "225"
  },
  {
    "conta": "0002.0014.0032.0013.0000.0000.0000.0000.0000.0000",
    "nome": "UBS Caratuva",
    "descricao": "",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "225"
  },
  {
    "conta": "0002.0014.0032.0014.0000.0000.0000.0000.0000.0000",
    "nome": "UBS Jardim Guarany",
    "descricao": "",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "225"
  },
  {
    "conta": "0002.0014.0032.0015.0000.0000.0000.0000.0000.0000",
    "nome": "UBS Ferraria",
    "descricao": "",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "225"
  },
  {
    "conta": "0002.0014.0032.0016.0000.0000.0000.0000.0000.0000",
    "nome": "UBS Fazendinha",
    "descricao": "",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "225"
  },
  {
    "conta": "0002.0014.0032.0017.0000.0000.0000.0000.0000.0000",
    "nome": "UBS Bateias",
    "descricao": "",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "225"
  },
  {
    "conta": "0002.0014.0032.0018.0000.0000.0000.0000.0000.0000",
    "nome": "UBS Itambezinho",
    "descricao": "",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "225"
  },
  {
    "conta": "0002.0014.0032.0019.0000.0000.0000.0000.0000.0000",
    "nome": "UBS Três Corregos",
    "descricao": "",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "225"
  },
  {
    "conta": "0002.0014.0032.0020.0000.0000.0000.0000.0000.0000",
    "nome": "UBS Santa Cruz",
    "descricao": "",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "225"
  },
  {
    "conta": "0002.0014.0032.0021.0000.0000.0000.0000.0000.0000",
    "nome": "UBS São Silvestre",
    "descricao": "",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "225"
  },
  {
    "conta": "0002.0014.0032.0022.0000.0000.0000.0000.0000.0000",
    "nome": "UBS São Pedro",
    "descricao": "",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "225"
  },
  {
    "conta": "0002.0014.0032.0003.0000.0000.0000.0000.0000.0000",
    "nome": "UBS Dante",
    "descricao": "",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "225"
  },
  {
    "conta": "0002.0014.0032.0004.0000.0000.0000.0000.0000.0000",
    "nome": "UBS Amadeu Mazzo",
    "descricao": "",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "225"
  },
  {
    "conta": "0002.0014.0032.0005.0000.0000.0000.0000.0000.0000",
    "nome": "UBS Ari Fior",
    "descricao": "",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "225"
  },
  {
    "conta": "0002.0014.0032.0006.0000.0000.0000.0000.0000.0000",
    "nome": "UBS Aguas Claras",
    "descricao": "",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "225"
  },
  {
    "conta": "0002.0014.0032.0007.0000.0000.0000.0000.0000.0000",
    "nome": "UBS Vila Glória",
    "descricao": "",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "225"
  },
  {
    "conta": "0002.0014.0032.0008.0000.0000.0000.0000.0000.0000",
    "nome": "UBS Itaboa",
    "descricao": "",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "225"
  },
  {
    "conta": "0002.0014.0032.0009.0000.0000.0000.0000.0000.0000",
    "nome": "UBS Rivabem",
    "descricao": "",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "225"
  },
  {
    "conta": "0002.0014.0032.0010.0000.0000.0000.0000.0000.0000",
    "nome": "UBS Bom Jesus",
    "descricao": "",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "225"
  },
  {
    "conta": "0002.0014.0033.0000.0000.0000.0000.0000.0000.0000",
    "nome": "CAPS's",
    "descricao": "",
    "nivel": "3",
    "analitico": "Não",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "15"
  },
  {
    "conta": "0002.0014.0033.0003.0000.0000.0000.0000.0000.0000",
    "nome": "CAPS AD (ALCOOL E DROGAS)",
    "descricao": "Serviço público de saúde que oferece tratamento, reabilitação e reinserção social para pessoas com transtornos por álcool e outras drogas, com equipes multidisciplinares e atividades terapêuticas, como grupos, oficinas, atendimento individual e familiar, atuando como alternativa à internação, com foco na autonomia e nos direitos dos usuários dentro da comunidade.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "226"
  },
  {
    "conta": "0002.0014.0033.0004.0000.0000.0000.0000.0000.0000",
    "nome": "CAPS II (SAÚDE MENTAL)",
    "descricao": "Em Atenção Psicossocial (CAPS), serviços públicos e abertos do SUS que oferecem cuidado comunitário para pessoas com sofrimento psíquico grave, transtornos mentais, visando reinserção social.",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "226"
  },
  {
    "conta": "0002.0014.0001.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Manutenção Gerais das Atividades da Saúde",
    "descricao": "Contempla as atividades de organização e gestão da secretaria, englobando Itens de Custo com serviços de terceiros - energia elétrica, água, internet, limpeza, vigilância, telefone, etc, e bens de consumo.",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "15"
  },
  {
    "conta": "0002.0014.0034.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Vigilância Sanitária e Epidemiológica",
    "descricao": "",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "15"
  },
  {
    "conta": "0002.0014.0035.0000.0000.0000.0000.0000.0000.0000",
    "nome": "INFECTOLOGIA",
    "descricao": "",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "15"
  },
  {
    "conta": "0002.0014.0036.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Farmácia Especial",
    "descricao": "",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "15"
  },
  {
    "conta": "0002.0014.0024.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Central de Medicamentos (CDM)",
    "descricao": "Setor municipal responsável por receber, controlar, armazenar e distribuir medicamentos e insumos para toda a rede de saúde, garantindo o abastecimento das unidades básicas (UBS) e hospitais, e a oferta gratuita à população de remédios essenciais e especializados, incluindo atenção farmacêutica para uso correto.",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "15"
  },
  {
    "conta": "0002.0014.0025.0000.0000.0000.0000.0000.0000.0000",
    "nome": "NIS III",
    "descricao": " Unidade física da Secretaria Municipal de Saúde que oferece consultas com especialistas, exames ou atendimentos de urgência.",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "15"
  },
  {
    "conta": "0002.0014.0026.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Centro de Especialidades Odontologicas (CEO)",
    "descricao": "Serviço público do SUS que oferece tratamentos odontológicos especializados, para pacientes encaminhados pelas Unidades Básicas de Saúde (UBS) da cidade, ampliando o acesso a cuidados que vão além da odontologia básica, visando a saúde bucal integral da população.",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "15"
  },
  {
    "conta": "0002.0014.0027.0000.0000.0000.0000.0000.0000.0000",
    "nome": "UMC  (Unidade da Mulher e da Criança)",
    "descricao": "Centro de saúde especializado que oferece atendimento integral focado na saúde da gestante, da mulher e da criança, incluindo pré-natal, programas de prevenção, acompanhamento de autismo e outros serviços de saúde, visando humanizar e qualificar o atendimento.",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "15"
  },
  {
    "conta": "0002.0014.0028.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Unidade de Pronto Atendimento (UPA)",
    "descricao": "Serviço de saúde 24 horas que atua como elo entre as Unidades Básicas de Saúde (UBS) e os hospitais, resolvendo grande parte das urgências e emergências, caso de complexidade intermediária.",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "15"
  },
  {
    "conta": "0002.0014.0029.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Almoxarifado da Saúde",
    "descricao": "Setor responsável por receber, armazenar, controlar e distribuir todos os materiais, medicamentos, equipamentos e insumos essenciais para o funcionamento de uma instituição de saúde, como hospitais, clínicas e postos de saúde",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "15"
  },
  {
    "conta": "0002.0014.0030.0000.0000.0000.0000.0000.0000.0000",
    "nome": "SAMU",
    "descricao": "Serviço de Atendimento Móvel de Urgência, que atende os casos de urgência e emergência,  com a finalidade de melhorar o atendimento a população.",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "15"
  },
  {
    "conta": "0002.0014.0031.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Ônibus Dr. Dentão",
    "descricao": "Contempla as atividades de organização e gestão da secretaria, englobando tanto recursos humanos quanto materiais.",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "15"
  },
  {
    "conta": "0002.0015.0000.0000.0000.0000.0000.0000.0000.0000",
    "nome": "SECRETARIA MUNICIPAL DE INFRAESTRUTURA VIÁRIA",
    "descricao": "",
    "nivel": "2",
    "analitico": "Não",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "1"
  },
  {
    "conta": "0002.0015.0001.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Manutenção e Funcionamento da Infraestrutura Viária",
    "descricao": "Contempla as atividades de organização e gestão da secretaria, englobando Itens de Custo com serviços de terceiros - energia elétrica, água, internet, limpeza, vigilância, telefone, etc, e bens de consumo.",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "16"
  },
  {
    "conta": "0002.0015.0002.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Almoxarifado do Obras Viárias",
    "descricao": "Distribuição de materiais, máquinas e equipamentos de controle e distribuição de logística.",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "16"
  },
  {
    "conta": "0002.0015.0003.0000.0000.0000.0000.0000.0000.0000",
    "nome": "N.U - Atividades Operacionais Ferraria - Área Urbana",
    "descricao": "",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "16"
  },
  {
    "conta": "0002.0015.0004.0000.0000.0000.0000.0000.0000.0000",
    "nome": "N.U - Atividades Operacionais  Ferraria - Área Rural",
    "descricao": "",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "16"
  },
  {
    "conta": "0002.0015.0005.0000.0000.0000.0000.0000.0000.0000",
    "nome": "N.U - Atividades Operacionais Regional Norte - Bateias, Três Córregos e São Silvestre",
    "descricao": "",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "16"
  },
  {
    "conta": "0002.0015.0006.0000.0000.0000.0000.0000.0000.0000",
    "nome": "N.U - Atividades Operacionais Regional Norte - Três Córregos",
    "descricao": "",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "16"
  },
  {
    "conta": "0002.0015.0008.0000.0000.0000.0000.0000.0000.0000",
    "nome": "N.U - Atividades Operacionais Ferraria - Regional Leste",
    "descricao": "",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "16"
  },
  {
    "conta": "0002.0015.0009.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Regional Sede e Leste - Área Urbana",
    "descricao": "",
    "nivel": "3",
    "analitico": "Não",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "16"
  },
  {
    "conta": "0002.0015.0009.0010.0000.0000.0000.0000.0000.0000",
    "nome": "Ouro Verde",
    "descricao": "",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "605"
  },
  {
    "conta": "0002.0015.0009.0011.0000.0000.0000.0000.0000.0000",
    "nome": "Cambuí",
    "descricao": "",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "605"
  },
  {
    "conta": "0002.0015.0009.0001.0000.0000.0000.0000.0000.0000",
    "nome": "Regional Sede e Leste - Área Urbana",
    "descricao": "",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "605"
  },
  {
    "conta": "0002.0015.0009.0012.0000.0000.0000.0000.0000.0000",
    "nome": "Nossa Senhora do Pilar",
    "descricao": "",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "605"
  },
  {
    "conta": "0002.0015.0009.0013.0000.0000.0000.0000.0000.0000",
    "nome": "Rivabem",
    "descricao": "",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "605"
  },
  {
    "conta": "0002.0015.0009.0014.0000.0000.0000.0000.0000.0000",
    "nome": "Bom Jesus",
    "descricao": "",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "605"
  },
  {
    "conta": "0002.0015.0009.0015.0000.0000.0000.0000.0000.0000",
    "nome": "Itaboa",
    "descricao": "",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "605"
  },
  {
    "conta": "0002.0015.0009.0016.0000.0000.0000.0000.0000.0000",
    "nome": "Nossa Senhora da Aparecida",
    "descricao": "",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "605"
  },
  {
    "conta": "0002.0015.0009.0017.0000.0000.0000.0000.0000.0000",
    "nome": "Águas Claras",
    "descricao": "",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "605"
  },
  {
    "conta": "0002.0015.0009.0018.0000.0000.0000.0000.0000.0000",
    "nome": "Botiatuva",
    "descricao": "",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "605"
  },
  {
    "conta": "0002.0015.0009.0019.0000.0000.0000.0000.0000.0000",
    "nome": "Itaqui",
    "descricao": "",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "605"
  },
  {
    "conta": "0002.0015.0009.0020.0000.0000.0000.0000.0000.0000",
    "nome": "Balbino Cunha",
    "descricao": "",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "605"
  },
  {
    "conta": "0002.0015.0009.0021.0000.0000.0000.0000.0000.0000",
    "nome": "Região Central",
    "descricao": "",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "605"
  },
  {
    "conta": "0002.0015.0009.0002.0000.0000.0000.0000.0000.0000",
    "nome": "Ferraria",
    "descricao": "",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "605"
  },
  {
    "conta": "0002.0015.0009.0003.0000.0000.0000.0000.0000.0000",
    "nome": "Cercadinho",
    "descricao": "",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "605"
  },
  {
    "conta": "0002.0015.0009.0004.0000.0000.0000.0000.0000.0000",
    "nome": "Colônia Dom Pedro",
    "descricao": "",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "605"
  },
  {
    "conta": "0002.0015.0009.0005.0000.0000.0000.0000.0000.0000",
    "nome": "Colônia Figueiredo",
    "descricao": "",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "605"
  },
  {
    "conta": "0002.0015.0009.0006.0000.0000.0000.0000.0000.0000",
    "nome": "Colônia Monte Claro",
    "descricao": "",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "605"
  },
  {
    "conta": "0002.0015.0009.0007.0000.0000.0000.0000.0000.0000",
    "nome": "Rondinha",
    "descricao": "",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "605"
  },
  {
    "conta": "0002.0015.0009.0008.0000.0000.0000.0000.0000.0000",
    "nome": "Salgadinho",
    "descricao": "",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "605"
  },
  {
    "conta": "0002.0015.0009.0009.0000.0000.0000.0000.0000.0000",
    "nome": "Itaqui de Cima",
    "descricao": "",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "605"
  },
  {
    "conta": "0002.0015.0010.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Regional Norte - Área Rural",
    "descricao": "",
    "nivel": "3",
    "analitico": "Não",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "16"
  },
  {
    "conta": "0002.0015.0010.0001.0000.0000.0000.0000.0000.0000",
    "nome": "Regional Norte - Área Rural",
    "descricao": "",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "626"
  },
  {
    "conta": "0002.0015.0010.0002.0000.0000.0000.0000.0000.0000",
    "nome": "Três Córregos",
    "descricao": "",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "626"
  },
  {
    "conta": "0002.0015.0010.0003.0000.0000.0000.0000.0000.0000",
    "nome": "São Silvestre",
    "descricao": "",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "626"
  },
  {
    "conta": "0002.0015.0010.0004.0000.0000.0000.0000.0000.0000",
    "nome": "Bateias",
    "descricao": "",
    "nivel": "4",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "626"
  },
  {
    "conta": "0002.0016.0000.0000.0000.0000.0000.0000.0000.0000",
    "nome": "SECRETARIA MUNICIPAL DE PLANEJAMENTO, MODERNIZAÇÃO E TRANSFORMAÇÃO DIGITAL",
    "descricao": "",
    "nivel": "2",
    "analitico": "Não",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "1"
  },
  {
    "conta": "0002.0016.0001.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Manutenção e Funcionamento do Planejamento e Transformação Digital",
    "descricao": "Contempla as atividades de organização e gestão da secretaria, englobando Itens de Custo com serviços de terceiros - energia elétrica, água, internet, limpeza, vigilância, telefone, etc, e bens de consumo.",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "17"
  },
  {
    "conta": "0002.0017.0000.0000.0000.0000.0000.0000.0000.0000",
    "nome": "SECRETARIA MUNICIPAL DE AGRICULTURA E PECUÁRIA",
    "descricao": "",
    "nivel": "2",
    "analitico": "Não",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "1"
  },
  {
    "conta": "0002.0017.0001.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Manutenção e Funcionamento da Agricultura e Agropecuária",
    "descricao": "Contempla as atividades de organização e gestão da secretaria, englobando Itens de Custo com serviços de terceiros - energia elétrica, água, internet, limpeza, vigilância, telefone, etc, e bens de consumo.",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "18"
  },
  {
    "conta": "0002.0018.0000.0000.0000.0000.0000.0000.0000.0000",
    "nome": "SECRETARIA MUNICIPAL DE ESPORTE E LAZER",
    "descricao": "",
    "nivel": "2",
    "analitico": "Não",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "1"
  },
  {
    "conta": "0002.0018.0001.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Manutenção e Funcionamento do Esporte e Lazer",
    "descricao": "Contempla as atividades de organização e gestão da secretaria, englobando Itens de Custo com serviços de terceiros - energia elétrica, água, internet, limpeza, vigilância, telefone, etc, e bens de consumo.",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "19"
  },
  {
    "conta": "0002.0018.0002.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Vila Olímpica",
    "descricao": "Contempla as atividades de organização e gestão da secretaria, englobando tanto recursos humanos quanto materiais.",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "19"
  },
  {
    "conta": "0002.0018.0003.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Ginásio Romano Zanlorenzi",
    "descricao": "Contempla as atividades de organização e gestão da secretaria, englobando tanto recursos humanos quanto materiais.",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "19"
  },
  {
    "conta": "0002.0018.0004.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Campo Ari Moro",
    "descricao": "Contempla as atividades de organização e gestão da secretaria, englobando tanto recursos humanos quanto materiais.",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "19"
  },
  {
    "conta": "0002.0019.0000.0000.0000.0000.0000.0000.0000.0000",
    "nome": "CONTROLADORIA GERAL DO PODER EXECUTIVO",
    "descricao": "",
    "nivel": "2",
    "analitico": "Não",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "1"
  },
  {
    "conta": "0002.0019.0001.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Manutenção e Funcionamento da Controladoria",
    "descricao": "Contempla as atividades de organização e gestão da secretaria, englobando Itens de Custo com serviços de terceiros - energia elétrica, água, internet, limpeza, vigilância, telefone, etc, e bens de consumo.",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "20"
  },
  {
    "conta": "0002.0021.0000.0000.0000.0000.0000.0000.0000.0000",
    "nome": "FUNDO MUNICIPAL DE ASSISTÊNCIA SOCIAL",
    "descricao": "",
    "nivel": "2",
    "analitico": "Não",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "1"
  },
  {
    "conta": "0002.0021.0001.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Manutenção e Funcionamento do Fundo de Assistência Social",
    "descricao": "Contempla as atividades do fundo.",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "21"
  },
  {
    "conta": "0002.0022.0000.0000.0000.0000.0000.0000.0000.0000",
    "nome": "FUNDO MUNICIPAL DE INFÂNCIA E ADOLESCÊNCIA",
    "descricao": "",
    "nivel": "2",
    "analitico": "Não",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "1"
  },
  {
    "conta": "0002.0022.0001.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Manutenção e Funcionamento do Fundo de Infância e Adolescência",
    "descricao": "Contempla as atividades de organização e gestão do fundo.",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "22"
  },
  {
    "conta": "0002.0002.0000.0000.0000.0000.0000.0000.0000.0000",
    "nome": "GABINETE DA VICE-PREFEITA",
    "descricao": "",
    "nivel": "2",
    "analitico": "Não",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "1"
  },
  {
    "conta": "0002.0002.0001.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Manutenção e Funcionamento do Gabinete da Vice-Prefeita",
    "descricao": "Contempla as atividades de organização e gestão da secretaria, englobando tanto recursos humanos quanto materiais.",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "3"
  },
  {
    "conta": "0002.0023.0000.0000.0000.0000.0000.0000.0000.0000",
    "nome": "FUNDO MUNICIPAL DO IDOSO",
    "descricao": "",
    "nivel": "2",
    "analitico": "Não",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "1"
  },
  {
    "conta": "0002.0023.0001.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Manutenção e Funcionamento do Fundo do Idoso",
    "descricao": "Contempla as atividades de organização e gestão do fundo.",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "23"
  },
  {
    "conta": "0002.0024.0000.0000.0000.0000.0000.0000.0000.0000",
    "nome": "FUNDO MUNICIPAL DE IGUALDADE ÉTNICO E RACIAL",
    "descricao": "",
    "nivel": "2",
    "analitico": "Não",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "1"
  },
  {
    "conta": "0002.0024.0001.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Manutenção e Funcionamento do Fundo de Igualdade Étnico e Racial",
    "descricao": "Contempla as atividades de organização e gestão do fundo.",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "24"
  },
  {
    "conta": "0002.0025.0000.0000.0000.0000.0000.0000.0000.0000",
    "nome": "FUNDO MUNICIPAL DE APOIO AO DEFICIENTE",
    "descricao": "",
    "nivel": "2",
    "analitico": "Não",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "1"
  },
  {
    "conta": "0002.0025.0001.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Manutenção e Funcionamento do  Fundo de Apoio ao Deficiente",
    "descricao": "Contempla as atividades de organização e gestão do fundo.",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "25"
  },
  {
    "conta": "0002.0026.0000.0000.0000.0000.0000.0000.0000.0000",
    "nome": "FUNDO MUNICIPAL DA POLÍTICA DA MULHER",
    "descricao": "",
    "nivel": "2",
    "analitico": "Não",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "1"
  },
  {
    "conta": "0002.0026.0001.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Manutenção e Funcionamento do Fundo da Política da Mulher",
    "descricao": "Contempla as atividades de organização e gestão do fundo.",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "26"
  },
  {
    "conta": "0002.0027.0000.0000.0000.0000.0000.0000.0000.0000",
    "nome": "SECRETARIA MUNICIPAL DE COMUNICAÇÃO SOCIAL",
    "descricao": "",
    "nivel": "2",
    "analitico": "Não",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "1"
  },
  {
    "conta": "0002.0027.0001.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Manutenção e Funcionamento da Comunicação Social",
    "descricao": "Contempla as atividades de organização e gestão da secretaria, englobando Itens de Custo com serviços de terceiros - energia elétrica, água, internet, limpeza, vigilância, telefone, etc, e bens de consumo.",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "27"
  },
  {
    "conta": "0002.0099.0000.0000.0000.0000.0000.0000.0000.0000",
    "nome": "RESERVA DE CONTINGÊNCIA",
    "descricao": "",
    "nivel": "2",
    "analitico": "Não",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "1"
  },
  {
    "conta": "0002.0099.0001.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Manutenção e Funcionamento da Reserva de Contingência",
    "descricao": "Contempla organização e gestão da reserva de contingência.",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "28"
  },
  {
    "conta": "0002.0003.0000.0000.0000.0000.0000.0000.0000.0000",
    "nome": "PROCURADORIA GERAL DO MUNICÍPIO",
    "descricao": "",
    "nivel": "2",
    "analitico": "Não",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "1"
  },
  {
    "conta": "0002.0003.0001.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Manutenção e Funcionamento da PGM",
    "descricao": "Contempla as atividades de organização e gestão da secretaria, englobando Itens de Custo com serviços de terceiros - energia elétrica, água, internet, limpeza, vigilância, telefone, etc, e bens de consumo.",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "4"
  },
  {
    "conta": "0002.0004.0000.0000.0000.0000.0000.0000.0000.0000",
    "nome": "SECRETARIA MUNICIPAL DE GOVERNO",
    "descricao": "",
    "nivel": "2",
    "analitico": "Não",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "1"
  },
  {
    "conta": "0002.0004.0001.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Manutenção e Funcionamento do Governo",
    "descricao": "Contempla as atividades de organização e gestão da secretaria, englobando Itens de Custo com serviços de terceiros - energia elétrica, água, internet, limpeza, vigilância, telefone, etc, e bens de consumo.",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "5"
  },
  {
    "conta": "0002.0005.0000.0000.0000.0000.0000.0000.0000.0000",
    "nome": "SECRETARIA MUNICIPAL DE ADMINISTRAÇÃO",
    "descricao": "",
    "nivel": "2",
    "analitico": "Não",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "1"
  },
  {
    "conta": "0002.0005.0001.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Manutenção e Funcionamento da Administração",
    "descricao": "Contempla as atividades de organização e gestão da secretaria, englobando Itens de Custo com serviços de terceiros - energia elétrica, água, internet, limpeza, vigilância, telefone, etc, e bens de consumo.",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "6"
  },
  {
    "conta": "0002.0005.0002.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Atividades Operacionais do Controle e Logistica da Frota",
    "descricao": "Contempla as atividades de organização e gestão da secretaria.",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "6"
  },
  {
    "conta": "0002.0005.0003.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Atividades Operacionais do Patrimônio",
    "descricao": "Contempla as atividades de organização e gestão da secretaria.",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "6"
  },
  {
    "conta": "0002.0005.0004.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Atividades Operacionais do Contratos e Licitações",
    "descricao": "Contempla as atividades de organização e gestão da secretaria.",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "6"
  },
  {
    "conta": "0002.0005.0005.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Atividades Operacionais do Compras e Almoxarifado",
    "descricao": "Contempla as atividades de organização e gestão da secretaria.",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "6"
  },
  {
    "conta": "0002.0005.0006.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Atividades Operacionais de Gestão de Recursos Humanos e Segurança do Trabalho",
    "descricao": "Contempla as atividades de organização e gestão da secretaria, englobando recursos humanos.",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "6"
  },
  {
    "conta": "0002.0005.0007.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Atividades Operacionais de Serviços Gerais",
    "descricao": "Contempla as atividades de organização e gestão da secretaria.",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "6"
  },
  {
    "conta": "0002.0006.0000.0000.0000.0000.0000.0000.0000.0000",
    "nome": "SECRETARIA MUNICIPAL DE DESENVOLVIMENTO ECONOMICO E INOVAÇÃO",
    "descricao": "",
    "nivel": "2",
    "analitico": "Não",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "1"
  },
  {
    "conta": "0002.0006.0001.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Manutenção e Funcionamento do Desenvolimento Economico e Turismo",
    "descricao": "Contempla as atividades de organização e gestão da secretaria, englobando Itens de Custo com serviços de terceiros - energia elétrica, água, internet, limpeza, vigilância, telefone, etc, e bens de consumo.",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "7"
  },
  {
    "conta": "0002.0007.0000.0000.0000.0000.0000.0000.0000.0000",
    "nome": "SECRETARIA MUNICIPAL DE DESENVOLVIMENTO SOCIAL E DA MULHER",
    "descricao": "",
    "nivel": "2",
    "analitico": "Não",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "1"
  },
  {
    "conta": "0002.0007.0010.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Centro da Juventude",
    "descricao": "Contempla as atividades de organização e gestão da secretaria, englobando recursos humanos",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "8"
  },
  {
    "conta": "0002.0007.0011.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Centro de Convivência da Pessoa Idosa",
    "descricao": "Contempla as atividades de organização e gestão da secretaria, englobando recursos humanos",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "8"
  },
  {
    "conta": "0002.0007.0001.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Manutenção e Funcionamento do Desenvolvimento Social e da Mulher",
    "descricao": "Contempla as atividades de organização e gestão da secretaria, englobando Itens de Custo com serviços de terceiros - energia elétrica, água, internet, limpeza, vigilância, telefone, etc, bens de consumo e recursos humanos.",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "8"
  },
  {
    "conta": "0002.0007.0012.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Conselho Tutelar I (Cambuí)",
    "descricao": "Contempla as atividades de organização e gestão da secretaria, englobando recursos humanos",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "8"
  },
  {
    "conta": "0002.0007.0013.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Conselho Tutelar II (Prefeitura)",
    "descricao": "Contempla as atividades de organização e gestão da secretaria, englobando recursos humanos",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "8"
  },
  {
    "conta": "0002.0007.0014.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Guarda Mirim",
    "descricao": "",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "8"
  },
  {
    "conta": "0002.0007.0002.0000.0000.0000.0000.0000.0000.0000",
    "nome": "CREAS",
    "descricao": "Contempla as atividades de organização e gestão da secretaria, englobando recursos humanos",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "8"
  },
  {
    "conta": "0002.0007.0003.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Centro POP",
    "descricao": "Contempla as atividades de organização e gestão da secretaria, englobando recursos humanos",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "8"
  },
  {
    "conta": "0002.0007.0004.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Casa Lar da Criança ''Tatiane Mariane de Almeida Leitão''",
    "descricao": "Contempla as atividades de organização e gestão da secretaria, englobando recursos humanos",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "8"
  },
  {
    "conta": "0002.0007.0005.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Lar do Idoso",
    "descricao": "Contempla as atividades de organização e gestão da secretaria, englobando recursos humanos",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "8"
  },
  {
    "conta": "0002.0007.0006.0000.0000.0000.0000.0000.0000.0000",
    "nome": "CRAS Ferraria",
    "descricao": "Contempla as atividades de organização e gestão da secretaria, englobando recursos humanos",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "8"
  },
  {
    "conta": "0002.0007.0007.0000.0000.0000.0000.0000.0000.0000",
    "nome": "CRAS Popular Nova",
    "descricao": "Contempla as atividades de organização e gestão da secretaria, englobando recursos humanos",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "8"
  },
  {
    "conta": "0002.0007.0008.0000.0000.0000.0000.0000.0000.0000",
    "nome": "CRAS Meliane",
    "descricao": "Contempla as atividades de organização e gestão da secretaria, englobando recursos humanos",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "8"
  },
  {
    "conta": "0002.0007.0009.0000.0000.0000.0000.0000.0000.0000",
    "nome": "CRAS Rivabem",
    "descricao": "Contempla as atividades de organização e gestão da secretaria, englobando recursos humanos",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "8"
  },
  {
    "conta": "0002.0008.0000.0000.0000.0000.0000.0000.0000.0000",
    "nome": "SECRETARIA MUNICIPAL DE DESENVOLVIMENTO URBANO",
    "descricao": "",
    "nivel": "2",
    "analitico": "Não",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "1"
  },
  {
    "conta": "0002.0008.0001.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Manutenção e Funcionamento do Desenvolvimento Urbano",
    "descricao": "Contempla as atividades de organização e gestão da secretaria, englobando Itens de Custo com serviços de terceiros - energia elétrica, água, internet, limpeza, vigilância, telefone, etc, e bens de consumo.",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "9"
  },
  {
    "conta": "0002.0009.0000.0000.0000.0000.0000.0000.0000.0000",
    "nome": "SECRETARIA MUNICIPAL DE MEIO AMBIENTE",
    "descricao": "",
    "nivel": "2",
    "analitico": "Não",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "1"
  },
  {
    "conta": "0002.0009.0001.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Manutenção e Funcionamento do Meio Ambiente",
    "descricao": "Contempla as atividades de organização e gestão da secretaria, englobando Itens de Custo com serviços de terceiros - energia elétrica, água, internet, limpeza, vigilância, telefone, etc, e bens de consumo.",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "10"
  },
  {
    "conta": "0002.0009.0002.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Manutenção de Controle Ambiental e Serviços Urbanos",
    "descricao": "",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "10"
  },
  {
    "conta": "0002.0009.0003.0000.0000.0000.0000.0000.0000.0000",
    "nome": "Manutenção da Defesa e Proteção Animal",
    "descricao": "",
    "nivel": "3",
    "analitico": "Sim",
    "Objeto de Custo Pai - Ano da Loa": "2026",
    "Objeto de Custo Pai - Código": "10"
  }
];