function change() {
  let rc = document.getElementById('icon');
  let nc = document.getElementById('dropo');
  if(rc.className=='fas fa-bars'&&nc.className=='dropo')
  {
    rc.className='fas fa-times';
    nc.className='drop1';
  }
  else{
    rc.className='fas fa-bars';
    nc.className='dropo';
  }

}
