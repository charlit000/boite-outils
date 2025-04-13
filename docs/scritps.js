// Recherche dans les commandes
document.getElementById('search-bar').addEventListener('input', function(e) {
    const searchQuery = e.target.value.toLowerCase();
    const commandes = document.querySelectorAll('ul li');
    
    commandes.forEach(function(commande) {
      const text = commande.textContent.toLowerCase();
      if (text.includes(searchQuery)) {
        commande.style.display = 'flex';
      } else {
        commande.style.display = 'none';
      }
    });
  });
  
  // Téléchargement de scripts
  function downloadScript(filename) {
    const scripts = {
      "show_ip_interface.sh": "show_ip_interface_content_here",
      "create_domain.ps1": "create_domain_content_here",
      "enable_ssh.sh": "enable_ssh_content_here"
    };
  
    const content = scripts[filename];
    const blob = new Blob([content], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  }
  