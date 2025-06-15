document.addEventListener('DOMContentLoaded', () => {
    const affirmationsList = document.getElementById('affirmations-list');
    const affirmations = [
        // ... (suas 20 afirmações aqui, exatamente como no seu código atual) ...
        "Eu sou um imã para a prosperidade e a riqueza, e o dinheiro flui para mim de fontes esperadas e inesperadas.",
        "Minha mente é um centro de ideias brilhantes e inovadoras, uma ferramenta poderosa para criar valor.",
        "Eu me dedico ao meu desenvolvimento pessoal e profissional com entusiasmo e foco, e cada passo me aproxima dos meus objetivos.",
        "Minha capacidade de aprender e absorver novos conhecimentos é ilimitada. Eu compreendo e retenho informações de forma eficaz e eficiente.",
        "Minha memória é afiada e confiável. Eu lembro de tudo que estudo e uso esse conhecimento para meu sucesso.",
        "Eu sou confiante, comunicativo e carismático. Minha voz é ouvida e valorizada.",
        "Liberto-me de toda timidez e insegurança. Eu me conecto com as pessoas de forma autêntica e prazerosa.",
        "Eu sou corajoso e forte. Supero a fobia social a cada dia, abrindo-me para novas experiências e interações.",
        "Eu me liberto de todos os pensamentos limitantes e de qualquer corda imaginária que me prenda. Eu sou livre para agir e ser quem eu quero ser.",
        "A cada dia, eu saio da minha zona de conforto e exploro o mundo com curiosidade e confiança.",
        "Minha mente é um santuário de otimismo. Eu vejo oportunidades onde outros veem obstáculos.",
        "Eu irradio energia positiva e atraio pessoas e situações que me elevam.",
        "Eu estou blindado contra energias negativas de outras pessoas. Eu escolho como me sinto, independentemente do que aconteça ao meu redor.",
        "Meus próprios pensamentos são meus maiores aliados. Eu nutro uma mentalidade de sucesso e abundância.",
        "Eu sou grato por todas as oportunidades que se apresentam e por todas as lições que aprendo.",
        "Eu confio no meu potencial e na minha capacidade de criar a vida que desejo.",
        "Eu sou persistente e resiliente. Cada desafio me fortalece e me aproxima da vitória.",
        "Minha saúde física e mental estão em perfeita harmonia, me dando a energia que preciso para alcançar meus sonhos.",
        "Eu mereço ser rico, feliz e realizado em todas as áreas da minha vida.",
        "Eu sou o arquiteto da minha própria realidade, e estou construindo uma vida extraordinária agora."
    ];

    const spiritualIcons = [
        './img/loto.png',
        './img/aura.png',
        './img/mente.png',
        './img/energia.png',
        './img/conexao.png',
        './img/evolucao.png',
        './img/harmonia.png',
        './img/inspiracao.png',
        './img/liberdade.png',
        './img/transformacao.png',
        './img/abundancia.png', // Novo
        './img/sabedoria.png',  // Novo
        './img/coragem.png',    // Novo
        './img/amor.png',       // Novo
        './img/gratidao.png',   // Novo
        './img/confianca.png',  // Novo
        './img/resiliencia.png',// Novo
        './img/saude.png',      // Novo
        './img/realizacao.png', // Novo
        './img/prosperidade.png'// Novo
    ];

    affirmations.forEach((affirmation, index) => {
        const listItem = document.createElement('li');
        const icon = document.createElement('img');
        icon.classList.add('affirmation-icon');
        // Agora, cada afirmação terá um ícone único se você tiver os 20 arquivos
        icon.src = spiritualIcons[index];
        icon.alt = "Ícone espiritual";

        const textSpan = document.createElement('span');
        textSpan.classList.add('affirmation-text');
        textSpan.textContent = affirmation;

        listItem.appendChild(icon);
        listItem.appendChild(textSpan);
        affirmationsList.appendChild(listItem);
    });
});