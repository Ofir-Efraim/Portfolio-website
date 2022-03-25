import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    skillsSection: {
        margin: '0 auto',
        maxWidth: '1040px',
        boxSizing: 'content-box',
        position: 'relative',
        overflow: 'hidden',
        gridTemplateColumns: '1fr 1fr',

        '@media screen and (max-width: 768px)': {
            padding: '24px 48px 0',
            flexDirection: 'column',
        },

        '@media screen and (max-width: 640px)': {

            width: 'calc(100vw - 32px)',
            flexDirection: 'column',
        }
    },
    divider: {
        width: '64px',
        height: '6px',
        borderRadius: '10px',
        backgroundColor: '#fff',
        background: 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)',

        margin: "4rem 0",

        '@media screen and (max-width: 768px)': {
            width: '48px',
            height: '4px',
        },

        '@media screen and (max-width: 640px)': {
            width: '32px',
            height: '2px',
        }
    },
    skillsTitle:{
        fontWeight: '800',
        fontSize: '65px',
        color:'white',
        lineHeight: '72px',
        width: 'max-content',
        maxWidth: '100%',
        webkitBackgroundClip: 'text',
        webkitTextFillColor: 'transparent',
        margin: '0 16px 0 0',
        padding:  '58px 0 16px',
        marginLeft:'20px',
      
        '@media screen and (max-width: 768px)':{
            fontSize:'56px',
            lineHeight:'56px',
            marginBottom: '12px',
            padding: '40px 0 12px',
            marginLeft:'20px',
        },
      
        '@media screen and (max-width: 640px)': {
            fontSize: '32px',
            lineHeight: '40px',
            marginBottom: '8px',
            padding: '16px 0 8px',
            maxWidth: '100%',
            marginLeft:'20px',
        }
    },
    skillsText:{
        maxWidth: '800px',
        fontSize: '24px',
        lineHeight: '40px',
        fontWeight: '300',
        paddingBottom: '2rem',
        color: 'rgba(255, 255, 255, 0.5)',
        marginLeft:'30px',

        '@media screen and (max-width: 768px)': {
            maxWidth: '670px',
            fontSize: '20px',
            lineHeight: '32px',
            paddingBottom: '24px',
            marginLeft:'30px',
  },

        '@media screen and (max-width: 640px)': {
            fontSize: '16px',
            lineHeight: '24px',
            paddingBottom: '16px',
            marginLeft:'30px',
  }
    },
    list:{
        listStyleType: 'none',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '40px',
        margin: '3rem 0',
        
        '@media screen and (max-width: 1024px)':{
          margin: '64px 0',
        },
      
        '@media screen and (max-width: 768px)':{
          margin: '64px 0',
          gap: '24p',
        },
        
        '@media screen and (max-width: 640px)': {
          display: 'flex',
          flexDirection: 'column',
          margin: '32px 0',
        }        
    },
    item:{
        maxWidth: '320px',
        display: 'flex',
        flexDirection: 'column',
      
        '@media screen and (max-width: 768px)':{
        maxWidth: '203px',
      },
      
      '@media screen and (max-width: 640px)':{
        marginBottom: '14px',
        maxWidth: '320px',
        flexDirection: 'row',
      }
    },
    container:{
        display: 'flex',
        flexDirection: 'column',
      
        '@media screen and (max-width: 640px)':{
          display: 'flex',
          marginLeft: '18px',
        }        
    },
    itemTitle:{
        fontWeight: '700',
        fontSize: '26px',
        lineHeight: '32px',
        letterSpacing: '0.02em',
        color: '#FFFFFF',
        margin:'0',
      
    '@media screen and (max-width: 768px)':{
        fontSize: '24px',
        lineHeight: '28px',
      },
      
      '@media screen and (max-width: 640px)':{
        fontSize: '20px',
        lineHeight: '28px',
        letterSpacing: '0.02em',
        marginBottom: '4px',
      }
    },
    paragraph:{
        fontSize: '18px',
        lineHeight: '30px',
        color: 'rgba(255, 255, 255, 0.75)',
      
        '@media screen and (max-width: 768px)':{
          fontSize: '16px',
          lineHeight: '28px',
        },
      
        '@media screen and (max-width: 640px)':{
          fontSize: '14px',
          lineHeight: '22px',
        }       
    }
}));