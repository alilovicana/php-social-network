function like_post(el){
    const xmlhttp=new XMLHttpRequest();
    xmlhttp.onload=function(){
        let id=el.getAttribute('data-post_id');
        document.getElementById('likes_'+id).innerText=this.responseText;

        el.setAttribute('disabled','disabled');

        setCookie("liked", el.getAttribute('data-post_id'),9999);

    }

    xmlhttp.open("GET","functions/like.php?post_id="+el.getAttribute('data-post_id'));
    xmlhttp.send();
    
}
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  if(getCookie("liked")!==""){
    document.querySelector('button[data-post_id="'+getCookie(cname,"liked")+'"]').setAttribute('disabled','disabled');
  }

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }