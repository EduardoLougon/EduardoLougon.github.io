function updateBox(topic) {
  let legend = document.getElementById('topic');
  let desc = document.getElementById('desc');

  switch (topic) {
    case 'desigualdade':
      legend.innerText = 'Desigualdade Social';
      desc.innerText = 'É impossível falar dessa obra sem citar a desigualdade social. Esse tema pode ser abordado tanto em relação a própria Val como com sua filha Jéssica, na sua jornada de cursar o vestibular. Abordando a desigualdade nas relações da empregada com os patrões, é notável uma naturalização dessa temática já que, mesmo sendo tratada com gentileza em alguns momentos, existe sobreposta nessa relação uma discreta hierarquia social que a impede de ultrapassar limites e estabelece regras na convivência. Assim, as relações de poder são explicitas e retratam como mesmo sendo uma mãe para Fabinho, Val não faz parte da família, mas é vista como uma ferramenta da casa. Já na questão da Jéssica, a desigualdade social é percebida através das diferentes oportunidades que Fabinho possui comparadas às condições precárias e díficeis que ela teve que superar.';
      break;

    case 'segregacao':
      legend.innerText = 'Segregação';
      desc.innerText = 'Fica clara no filme a separação espacial entre as diferentes classes sociais. Além de uma análise mais local, a obra também debate as diferenças socioecônomicas entre o Nordeste e Sudeste, destacando a ausência de oportunidades e isolamento da região ao Norte do país. Já diante de um ponto de vista menos amplo, a casa em que Val trabalha representa uma poderosa metáfora que reflete a divisão da sociedade brasileira. O quarto da empregada, por exemplo, é um espaço reservado aos mais pobres, sendo assim localizado na "periferia" da casa, longe do conforto, do centro de decisões e em condições precárias. Já na cozinha, Val foge um pouco do isolamento, mas permanece em uma posição subalterna e funciona como um objeto funcional e indispensável. Entretanto, seu limite está ai, o resto da casa, como a sala de estar e a cozinha, são reservados para a família rica. Quando Jéssica quebra os padrões ao entrar nesses ambientes, ela gera bastante desconforto, demonstrando como esse espaço é marcado por privilégios e pela exclusão.';
      break;

    case 'patriarcal':
      legend.innerText = 'Brasil Patriarcal';
      desc.innerText = 'Mesmo o filme sendo centrado em três mulheres, uma delas sendo até uma mulher que detém de muito poder, o filme aborda o machismo estruturado na sociedade brasileira. De ínicio, vale citar o trabalho de cuidado desempenhado estritamente pela mulher, enquanto os homens se distânciam dessa relação sobre um olhar indiferente e negligente. Além disso, Jéssica funciona como uma crítica à ideia de que as mulheres devem aceitar tudo que lhes é imposto, como se fossem um objeto. Também fica explícito no filme que, embora Bárbara seja a chefe de casa em termos práticos, Carlos, seu marido, tem o poder de desautorizá-la e é permitido socialmente a evitar as responsabilidades emocionais e domésticas.';
      break;

    case 'papeis':
      legend.innerText = 'Papeis Sociais';
      desc.innerText = 'O filme critica os papeis sociais mostrando como são construções artificiais, mantidas por padrões culturais e econômicos. Val representa uma classe inteira, caracterizada pela obediência e subalternidade, que é obrigada historicamente a aceitar as condições impostas sem questionar, mostrando como esse papel social é internalizado na sociedade. Os patrões representam o papel da classe dominante, que mantêm a ordem através do enraizamento dessa arquitetura social. Já Jéssica aparece como um obstáculo para essa organização. Dedicada a cursar arquitetura, ela é responsável por tentar redesenhar as estruturas da casa, que representa a sociedade como um todo, e descobre a máscara por trás de Bárbara, que passa a vê-la como uma ameaça. ';
      break;
  }
  
}

