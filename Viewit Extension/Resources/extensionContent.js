//window.onload = () => {console.log("test")}
//document.addEventListener("DOMContentLoaded", () => console.log("domcontentloaded"));
//if (document.readyState === "complete")
//{
//console.log("is working 1")
//}
//else
//{
//window['onload'] = function () {
//    console.log("is working 2")
//    const el = document.querySelector(".XPromoPill")
//    console.log({el: el})
//}
//}

const redditViewer = () => {
    const looksBetterBanner = document.querySelector(".XPromoPill")
    if(looksBetterBanner) looksBetterBanner.parentNode.removeChild(looksBetterBanner)
    
    const seeCommunityIn = document.querySelector(".XPromoPopup")
    if(seeCommunityIn) seeCommunityIn.parentNode.removeChild(seeCommunityIn)
        
    const promoButton = document.querySelector(".TopNav__promoButton")
        // We won't remove the top button for now
    //if(promoButton) promoButton.parentNode.removeChild(promoButton)
        
    const promoInFeed = document.querySelector(".XPromoInFeed")
    if(promoInFeed) promoInFeed.parentNode.removeChild(promoInFeed)
            
    const promoInFooter = document.querySelector(".xPromoAppStoreFooter")
    if(promoInFooter) promoInFooter.parentNode.removeChild(promoInFooter)
        
    const promoBlockingModal = document.querySelector(".XPromoBlockingModal")
    if(promoBlockingModal) promoBlockingModal.parentNode.removeChild(promoBlockingModal)
        
    const seeThisPostIn = document.querySelector("shreddit-experience-tree")
    if(seeThisPostIn) seeThisPostIn.parentNode.removeChild(seeThisPostIn)
        
    const body = document.querySelector("body")
    body.classList.remove("scroll-disabled")
    body.classList.remove("scroll-is-blocked")
}

const interval = setInterval(redditViewer, 250)

