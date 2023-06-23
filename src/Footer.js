import React from 'react'

function Footer({length}){
    const year=new Date();
    return(
        <footer>
            {/* {length}  */}
            CopyRight &copy;{year.getFullYear()}</footer>
);
}
export default Footer;