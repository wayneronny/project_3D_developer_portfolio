import React from 'react';

function Footer() {
  return (
    <footer 
      style={{ 
        backgroundColor: '#050816', 
        color: '#fff', 
        padding: '1rem 0', 
        textAlign: 'center', 
        marginTop: '-10px' // Adjust this value as needed
      }} 
    >
      <div className="container">
        <div className="copyright">
        Copyright &copy; {new Date().getFullYear()} All rights reserved | by Ronald Omondi
        </div>
      </div>
    </footer>
  );
}

export default Footer;