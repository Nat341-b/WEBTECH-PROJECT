// Configuration Properties
const MY_AFFILIATE_ID = "CLASS_PROJECT_2026";

/**
 * Attaches pointer tap dispatch behavior to ecommerce routing controls.
 */
function initializeAffiliateRouting() {
    const buyButtons = document.querySelectorAll('.buy-btn');
    
    buyButtons.forEach(button => {
        button.addEventListener('click', function () {
            const keyword = this.getAttribute('data-keyword');
            if (!keyword) return;

            // Generate verified URI pathing parameters
            const encodedKeyword = encodeURIComponent(keyword);
            const searchLink = `https://shopee.com.my/search?keyword=${encodedKeyword}&sp_atk=${MY_AFFILIATE_ID}`;

            // Save visual layout state variables
            const originalText = this.innerHTML;
            this.innerText = "Opening Shopee...";

            // Delay redirection slightly to improve visual interaction feedback
            setTimeout(() => {
                window.open(searchLink, '_blank');
                this.innerHTML = originalText;
            }, 600);
        });
    });
}

// Fire context bindings upon document payload resolution
document.addEventListener('DOMContentLoaded', initializeAffiliateRouting);