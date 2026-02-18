
        const form = document.getElementById('formulario');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const formData = new FormData(form);
            const presenca = formData.get('data[Presença]');

            fetch(form.action, {
                method: "POST",
                body: formData,
            })
            .then(() => {
                if (presenca === "Sim") {
                    window.location.href = "agradecimento_sim.html";
                } else {
                    window.location.href = "agradecimento_nao.html";
                }
            });
        });
    
