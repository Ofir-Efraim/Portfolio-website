import {
    makeStyles
} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    main: {
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
    projectsTitle:{
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
    projcetsSection: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
        padding: '3rem',
        placeItems: 'center',
        columnGap: '2rem',
        rowGap: '3rem',
        '@media screen and (max-width: 640px)': {
            display: 'flex',
            flexDirection: 'column',
            padding: '2rem',
            paddingBottom: '0',
        }
    },
    card: {
        borderRadius: '10px',
        boxShadow: '3px 3px 20px rgba(80, 78, 78, 0.5)',
        textAlign: 'center',
        width: '400px',
        '@media screen and (max-width: 640px)': {
            width: '100%',
        }
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        overFlow: 'hidden',
    },
    titleContent: {
        textAlign: 'center',
        zIndex: '20',
        width: '100%',
        color: '#9cc9e3',
    },
    headerStyled: {
        fontWeight: '500',
        letterSpacing: '2px',
        color: '#9cc9e3',
        padding: '.5rem 0',
        fontSize: '2rem',
    },
    styledHr: {
        width: '50px',
        height: '3px',
        margin: '20px auto',
        border: '0',
        background: '#d0bb57',
    },
    description: {
        width: '80%',
        padding: '0 40px',
        color: '#e4e6e7',
        fontStyle: '2rem',
        lineHeight: '24px',
        textAlign: 'center',
        '@media screen and (max-width: 640px)': {
            padding: '.3rem',

        }
    },
    list: {
        display: 'flex',
        justifyContent: 'space-around',
        padding: '2rem',
        listStyleType: 'none'
    },
    item: {
        color: '#9AEBA3',
    },
    utility: {
        listStyleType: 'none',
        padding: '0',
        display: 'flex',
        justifyContent: 'space-around',
        margin: '2.5rem 0',
    },
    exLinks: {
        color: '#ffffff',
        padding: '1rem 1.5rem',
        background: '#13678A',
        borderRadius: '15px',
        transition: '0.5s',
        textDecoration: 'none',
        '&:hover': {
            background: '#45C4B0',
        }
    }

}));