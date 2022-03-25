import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    main:{
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
    aboutSection:{
        width: '100%',
        '@media screen and (max-width: 640px)': {
            width: '80%',
            display: 'flex',
            flexDirection: 'column',

            margin: '0 auto',
            },
        '@media screen and (max-width: 768px)':  {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',

            margin: '0 auto',
  }
    },
    aboutTitle:{
        fontWeight: '800',
        fontSize: '65px',
        color:'white',
        lineHeight: '72px',
        width: 'max-content',
        maxWidth: '100%',
        webkitBackgroundClip: 'text',
        webkitTextFillColor: 'transparent',
        marginBottom: '16px',
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
    
    aboutText:{
        maxWidth: '800px',
        fontSize: '24px',
        lineHeight: '32px',
        fontWeight: '300',
        paddingBottom: '3.6rem',
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
    cv:{
        maxWidth: '800px',
        fontSize: '24px',
        lineHeight: '32px',
        fontWeight: '300',
        paddingBottom: '3.6rem',
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
  },
    },
}));