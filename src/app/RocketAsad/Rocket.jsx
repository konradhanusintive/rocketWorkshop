function Rocket(props) {
  const postion = props.position;

  return (
        <img style={{position: 'absolute', bottom: postion + 'px', width: "100px"}} src="https://www.pinclipart.com/picdir/big/302-3023318_rockets-png-images-free-download-rocket-png-clipart.png" />
  );
}


export default Rocket;
