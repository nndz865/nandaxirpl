const display = document.getElementById('display'); 
let expr = '';
document.body.addEventListener('click',  function (e)  { 
    if(e.target.tagName !== 'BUTTON') 
    return; 
    const val = e.target.textContent;
     if(val === '=') { 
        try { expr = eval(expr); }
     catch { expr = 'error'; }
    } else if(val === 'C') { expr = ''; }
     else { expr += val; } display.value = expr; });