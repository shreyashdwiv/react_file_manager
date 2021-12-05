import React, {useState} from 'react';

function App() {
  return <div>
  <Folder name="Desktop" >
      <Folder name="Music"  >
        <File name="one_direction.mp4"/>
        <File name="express.mp4"/>
    </Folder>
    <File name="dogs.jpeg"/>
    <File name="cats.jpeg"/>
  </Folder>
    <Folder name="Application">
    <Folder name="code_images"  >
        <File name="random_favi.ico"/>
        <File name="clouds.img"/>
    </Folder>
    
    </Folder>
    
  </div>;
}

const Folder = (props) => {
  const [isopen, setIsOpen]=useState(false)
  const { name, children } = props;
  const direction = isopen ? 'down':'right';
  const handleClick = () => {
    setIsOpen(!isopen);
  };
  return <div>
    <span onClick={handleClick}>
      <i className='red folder icon'></i>
      <i className={`caret ${direction} icon`}></i>
      </span>
    {name}
    <div style={{marginLeft:'20px'}}>
      {isopen ? children:null}
    </div>  
 </div>
};


const File = (props) => {
  const { name } = props;
  const fileExtension = name.split('.')[1];
  const fileIcons = {
    mp4: 'headphones',
    jpeg: 'file image',
    ico: 'file image outline',
    img: 'file image outline'
  };
  return <div>
    <i className={` ${fileIcons[fileExtension]} icon`}></i>
    {name}
    </div>
};

export default App;
