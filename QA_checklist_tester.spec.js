describe('QA_Checklist', function () {
    
    const website = 'http://speller-international.staging.krakatoa.aus-2.volcanic.cloud/'
    
	it('Check Favicon (32x32)', function () {
		cy.visit(website)
		cy.get('head')
			.find('link[type="image/x-icon"]')
			.should('not.have.attr', 'href', 'https://sa.krakatoa.eu-2.volcanic.cloud/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc0hlIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1fa775d72b951e97cb327a38362440fb9e27fe17/favicon.png')
    })

    it('Check OG Image - Image Library (Logo 1200x630px - JPG)', function(){
        cy.visit(website)
        cy.get('head')
            .find('meta[property="og:image"]')
            .should('not.have.attr', 'href', 'https://d3jh33bzyw1wep.cloudfront.net/s3/W1siZiIsInRoZW1lX2Fzc2V0cy8xNTI5NDgzMzM0L1N0ZW0gV29tZW4vcG5nL2Zhdmljb24ucG5nIl1d')
    })

    it('Check Banner default image (replace banner-default.jpg)', function(){
        cy.visit(website + 'consultants')
        cy.get('#sub-banner').should('be.visible')
        cy.get('#sub-banner').within(($sub_banner) => {
            cy.get('img').should('not.have.attr', 'src', '/images/blank.png')
            cy.get('img').should('not.have.attr', 'src', 'https://sa.krakatoa.eu-2.volcanic.cloud/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbGFWIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--48c45fd738da4a611c5e48fe765f9337f828d60a/banner-default.jpg')
        })

    })


}) 