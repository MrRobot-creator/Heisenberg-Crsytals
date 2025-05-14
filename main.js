$(document).ready(function() {
    $('nav a').on('click', function(e) {
        if (this.hash !== '') {
            e.preventDefault();
            
            const hash = this.hash;
            
            $('html, body').animate(
                {
                    scrollTop: $(hash).offset().top - 70
                },
                800
            );
        }
    });
    
    $('.add-to-cart').on('click', function() {
        const productId = $(this).data('id');
        const productName = $(this).siblings('h3').text();
        
        // Aqui você pode adicionar a lógica para adicionar ao carrinho
        // Por enquanto, apenas um alerta
        alert(`produto "${productName}" adicionado ao carrinho!`);
        
        // Efeito visual
        $(this).text('Adicionado!').css('background-color', '#27ae60');
        
        // Reset após 2 segundos
        setTimeout(() => {
            $(this).text('Adicionar ao Carrinho').css('background-color', '#3498db');
        }, 2000);
    });
    
    // Ajustar altura dos cards de produto para ficarem iguais
    function adjustProductCardsHeight() {
        if ($(window).width() > 640) { // Apenas para desktop e tablet
            let maxHeight = 0;
            
            $('.product-card').each(function() {
                $(this).css('height', 'auto');
                const height = $(this).outerHeight();
                if (height > maxHeight) {
                    maxHeight = height;
                }
            });
            
            $('.product-card').css('height', maxHeight);
        } else {
            $('.product-card').css('height', 'auto');
        }
    }
    
    // Executar na carga e no redimensionamento da tela
    adjustProductCardsHeight();
    $(window).resize(adjustProductCardsHeight);
});