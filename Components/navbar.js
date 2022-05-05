function navbar(){

   return `
   <div class="headContainer">
   <ul class="headShortcut"> 
       <li class="headShortcut_item compDropdown hoverShow">
           <span class="headShortcut_itemLabel no-underline"> 
               <i class="fa-light fa-mobile-button"></i>
               <span class="headShortcut_itemText">Save $3 with App</span> 
           </span> 
           <i class="fa-solid fa-angle-down"></i>
           <div class="compDropdown-panel"> 
               <div class="compDropdown-cont"> 
                   <div class="headAppDownload"> 
                       <div class="appDownload_panel"> 
                           <div class="appDownload_title">Download App!</div> 
                           <p class="appDownload_desc" title="Save $3 with App &amp; New User Only">Save $3 with App &amp; New User Only</p>
                            <div class="appDownload_area">
                                <div id="scanner_img">
                                   <img src="https://www.teddyguilfoyle.ie/wp-content/uploads/2017/06/qr_code-464x464.jpg"/>
                                </div>
                                <div id="app_link">
                                   <a href="https://gearbest.app.link/pctopios" class="appDownload_appStore"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7KPOPGL_cjyTGF2AuXAq8Aw9559l8epPhAYcqZ9SXyi1PG30ZTg8T83gr_X7M2Wg8HHI&usqp=CAU"/></a> 
                                   <a href="https://gearbest.app.link/pctopandroid" class="appDownload_googlePlay"><img src="https://admin.worldwaterweek.org/wp-content/uploads/2019/08/google-play-badge-342x132.png"/></a> 
                                </div>
                                
                            </div> 
                       </div> 
                   </div> 
               </div>
           </div>

       </li>  

       <li class="headShortcut_item">
           <a href="https://support.gearbest.com/ticket/ticket/cat" class="headShortcut_itemLink" rel="nofollow">Support Center</a> 
       </li> 
       <li class="headShortcut_item compDropdown clickShow" id="js-btnShowShipto" data-logic="ship_currency"> 
           <span class="headShortcut_itemLabel" id="js-labelShipTo">
           <span>Ship to</span>
           <img src="https://m.media-amazon.com/images/I/91SvsEIhnqL._SL1500_.jpg" alt="United States" title="United States" class="headShortcut_nalflag"> /
           <span>India</span>
           </span>
           <i class="fa-solid fa-angle-down"></i>
           

</li>
<li class="headShortcut_item compDropdown clickShow" data-logic="google-lang"> 
<span class="headShortcut_itemLabel">Language</span>
<i class="fa-solid fa-angle-down"></i>
 <div class="compDropdown-panel">
    <div class="compDropdown-cont"> 
        <div class="headLanguage" id="google_translate_element">
            <div class="skiptranslate goog-te-gadget">
                <div class="goog-te-gadget-simple" style="white-space: nowrap;">
                   <img src="https://cdn.jim-nielsen.com/ios/512/google-2015-10-22.png" class="goog-te-gadget-icon" alt="" style="background-image: url(&quot;https://translate.googleapis.com/translate_static/img/te_ctrl3.gif&quot;); background-position: -65px 0px;"/>
                   <span style="vertical-align: middle;">
                       <a aria-haspopup="true" class="goog-te-menu-value" href="javascript:void(0)">
                           <span>Select Language</span>
                           <img src="https://www.google.com/images/cleardot.gif" alt="" width="1" height="1">
                           <span style="border-left: 1px solid rgb(187, 187, 187);">​</span>
                           <img src="https://www.google.com/images/cleardot.gif" alt="" width="1" height="1">
                           <span aria-hidden="true" style="color: rgb(118, 118, 118);">▼</span>
                       </a>
                   </span>
               </div>
           </div>
       </div> 
   </div> 
</div>
</li>
    <li class="headShortcut_item compDropdown hoverShow">
           <span class="headShortcut_itemLabel">Country Website</span>
           <i class="fa-solid fa-angle-down"></i>
           <div class="compDropdown-panel">
               <div class="compDropdown-cont">
                    <ul class="headPipeline"> 
                       <li class="headPipeline_item"> 
                            <a href="https://www.gearbest.com" class="headPipeline_itemLink">Global(English)</a>
                       </li>
                       <li class="headPipeline_item"> 
                            <a href="https://fr.gearbest.com" class="headPipeline_itemLink">France</a>
                       </li> 
                       <li class="headPipeline_item">
                           <a href="https://es.gearbest.com" class="headPipeline_itemLink">España</a>
                       </li> 
                       <li class="headPipeline_item"> 
                           <a href="https://ru.gearbest.com" class="headPipeline_itemLink">Россия</a>
                       </li> 
                       <li class="headPipeline_item"> 
                           <a href="https://pt.gearbest.com" class="headPipeline_itemLink">Portugal</a> 
                       </li> 
                       <li class="headPipeline_item">
                           <a href="https://it.gearbest.com" class="headPipeline_itemLink">Italia</a>
                       </li> 
                       <li class="headPipeline_item"> 
                           <a href="https://de.gearbest.com" class="headPipeline_itemLink">Deutschland</a> 
                       </li>
                       <li class="headPipeline_item"> 
                           <a href="https://br.gearbest.com" class="headPipeline_itemLink">Brasil</a> 
                       </li> 
                       <li class="headPipeline_item"> 
                           <a href="https://tr.gearbest.com" class="headPipeline_itemLink">Türkiye</a>
                       </li>
                       <li class="headPipeline_item"> 
                           <a href="https://pl.gearbest.com" class="headPipeline_itemLink">Polska</a> 
                       </li> 
                       <li class="headPipeline_item">
                           <a href="https://jp.gearbest.com" class="headPipeline_itemLink">Japan</a>
                       </li> 
                   </ul> 
                                                        
               </div> 
           </div> 
   </li>
   </ul>
   <div class="headEntries">
       <a href="https://www.gearbest.com" class="headLogo"> 
           <h1> <img src="https://uidesign.gbtcdn.com/GB/images/promotion/2019/a_evan/Gearbest/logo_gearbest.png?imbypass=true" alt="Gearbest"> </h1> 
       </a>
       <div class="headSearch">
          <div class="headSearch_wrap"> 
             <div class="headSearch_All">
               <span>All</span>
               <i class="fa-solid fa-angle-down"></i>   
              </div>

            <input type="search" id="search" placeholder="Search" value=""/>
         
             <div id="search_icon">
               <i class="fa-solid fa-magnifying-glass"></i>
             </div>
           </div>
       </div>
       <div id="headEntries_user">
           <div class="headEntries_item compDropdown hoverShow headUser" id="js-panelUserInfo" data-login="0">
               <span class="headEntries_icon headEntries_iconUser"></span>
                <span class="headUser_linkLogin">Sign In </span>
                <a href="https://user.gearbest.com/index#/favor/goods" class="headUser_name js-labelUserName" rel="nofollow">Gearbest</a>
                <div class="compDropdown-panel"> 
                   <div class="compDropdown-cont"> 
                       <div class="headUser_login"> 
                           <p class="headUser_loginLabel">Welcome to Gearbest</p> 
                           <a href="https://login.gearbest.com/m-users-a-sign.htm?type=1" class="headUser_btnLogin" rel="nofollow">Sign In</a>
                         <div class="headUser_socialLogin js-panelSocialLogin" style="display: block;"> 
                            <span class="headUser_socialLabel">or connect via</span> 
                           <img src="https://img.icons8.com/color/344/google-logo.png" class="google_image"/>
                         </div> 
                           <p class="headUser_loginLabel">Register on Gearbest: Earn 10 points</p>
                           <a href="https://login.gearbest.com/m-users-a-register.htm?type=1" class="headUser_btnReg" rel="nofollow">Register</a>
                       </div>
                   </div>
                </div>
            </div> 
            <a href="https://user.gearbest.com/index#/favor/goods" class="headEntries_item headCollect" rel="nofollow"> 
                <span class="headEntries_icon headEntries_iconFav"></span> 
                <span>Favorites</span> 
                <em data-type="1" class="headEntries_itemBadge js-collectNum">0</em> 
               </a>
               <div class="headEntries_item compDropdown headCart hoverShow" data-logic="simple-cart" id="js-labelHeadCart"> 
                   <a href="https://cart.gearbest.com/cart/index" rel="nofollow">
                        <span class="headEntries_icon headEntries_iconCart"></span>
                         <span>Cart</span> 
                         <em class="headEntries_itemBadge js-cartNum">0</em> 
                      </a> 
                      <div class="compDropdown-panel compDropdown-panelLeft js-headCart">
                           <div class="compDropdown-cont headCart_panel"> 
                               <div class="headCart_dataPanel" id="js-panelHeadCartList"> 

                                 <div class="headCart_emptyBox">Your shopping cart is empty. Go shopping!</div>
              
                               </div> 
                            </div> 
                       </div> 
                </div>
           
       </div>
   </div>
  
</div> `
}


export default navbar;