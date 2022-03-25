import {
    makeStyles
} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    wrapper: {
        width: 'calc(100vw - 96px)',
        maxWidth: '1040px',
        padding: '2rem 48px 40px',
        margin: '1rem auto',
        boxSizing: 'content-box',


        '@media screen and (max-width: 640px)': {
            padding: '0 16px 48px',
            width: 'calc(100vw - 32px)',
        }
    },
    list: {
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, minmax(85px, 220px))',
        gap: '40px',
        padding: '40px 0 28px',

        '@media screen and (max-width: 1024px)': {
            padding: '32px 0 16px',
        },

        '@media screen and (max-width: 768px)': {
            width: '100%',
            padding: '32px 0 16px',
            gap: '16px',
        },
        '@media screen and (max-width: 640px)': {
            width: '100%',
            padding: '32px 4px 16px',
            gap: '5px',
        }
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '220px',
        width: '100%',
    },
    title: {
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '12px',
        lineHeight: '24px',
        textTransform: 'uppercase',
        color: 'rgba(255, 255, 255, 0.4)',
        marginBottom: '16px',

        '@media screen and (max-width: 640px)': {
            fontSize: '10px',
            lineHeight: '12px',
            marginBottom: '8px',
        }
    },
    link: {
        fontSize: '18px',
        lineHeight: '30px',
        color: 'rgba(255, 255, 255, 0.75)',
        marginBottom: '16px',
        transition: '.3s ease',
        position: 'relative',
        left: '0',
        textDecoration: 'none',


        '&:hover': {
            color: '#fff',
            left: '6px',
        },

        '@media screen and (max-width: 768px)': {
            fontSize: '16px',
            lineHeight: '28px',
            display: 'flex',
        },

        '@media screen and (max-width: 640px)': {
            fontSize: '8px',
            lineHeight: '14px',
            marginBottom: '8px',
            display: 'flex',
            alignItems: 'center',
        }
    },
    iconsContainer: {
        maxWidth: '1040px',
        display: 'flex',
        justifyContent: 'space-between',

        '@media screen and (max-width: 768px)': {
            display: 'flex',
            justifyContent: 'space-between',
        },

        '@media screen and (max-width: 640px)': {
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
        }
    },
    company:{
        display: 'flex',
        alignItems:'baseline',
        flexWrap: 'wrap',
        marginRight: 'auto',
        
    
        '@media screen and (max-width: 768px)':{
            flexDirection: 'column',
            alignItems: 'baseline',
        },
    
        '@media screen and (max-width: 640px)':{
            display: 'flex',
            flexDirection: 'column',
            margin: '0 0 32px',
            alignItems: 'center',
        }        
    },
    slogan:{
        color: 'rgba(255, 255, 255, 0.5)',
        minWidth: '280px',
        letterSpacing: '0.02em',
        fontSize: '18px',
        lineHeight: '30px',
    
        '@media screen and (max-width: 768px)':{
            fontSize: '16px',
            lineHeight: '28px',
        },
    
        '@media screen and (max-width: 640px)':{
            lineHeight: '22px',
            fontSize: '14px',
            minWidth: '100px',
        }        
    },
    socialContainer:{
        display: 'flex',
        alignItems: 'center',
      
        '@media screen and (max-width: 768px)':{
              justifyContent: 'center',
              paddingRight: '16px',
              flexWrap: 'wrap',
          }
    },
    icon:{
        transition: '0.3s ease',
        color: 'white',
        borderRadius: '50px',
        padding: '8px',
        '&:hover': {
        backgroundColor: '#212d45',
        transform: 'scale(1.2)',
        cursor: 'pointer',
        }
    }
}));