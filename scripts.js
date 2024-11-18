function updateBox(topic) {
  let legend = document.getElementById('topic');
  let desc = document.getElementById('desc');

  switch (topic) {
    case 'desigualdade':
      legend.innerText = 'Desigualdade Social';
      desc.innerText = 'texto desigualdade';
      break;

    case 'segregacao':
      legend.innerText = 'Segregação';
      desc.innerText = 'texto segregaçao';
      break;

    case 'patriarcal':
      legend.innerText = 'Brasil Patriarcal';
      desc.innerText = 'texto patriacal';
      break;

    case 'papeis':
      legend.innerText = 'Papeis Sociais';
      desc.innerText = 'texto papeis sociais';
      break;
  }
  
}