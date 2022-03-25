import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gridTemplateRows: '1fr',
        gridColumnGap: '2rem',
        padding: '1rem',
        paddingTop: '2rem',

        // eslint-disable-next-line no-template-curly-in-string
        '@media screen and (max-width: 640px)': {
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gridTemplateRows: 'repeat(2, 60px)',
            gridColumnGap: '0.5rem',
            gridRowGap: '0.5rem',
  }

    },

    leftDiv:{
        gridArea: '1 / 1 / 2 / 2',
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        '@media screen and (max-width: 640px)': {
            gridArea: '1 / 1 / 2 / 3',
  }
    },
    
    title:{
        fontSize:'2.5rem',
        display:'flex', 
        alignItems:'center', 
        color:'white',
        marginBottom:'20px'
    },

    middleDiv:{
        marginLeft:'80px',
        marginTop:'35px',
        gridArea: '1 / 2 / 2 / 4',
        display: 'flex',
        justifyContent: 'space-around',
        '@media screen and (max-width: 640px)': {
        gridArea: '2 / 2 / 3 / 5',
  }
    },

    anchor:{
        margin:'10px',
        fontSize: '2rem',
        lineHeight: '32px',
        color: 'rgba(255, 255, 255, 0.75)',
        transition: '0.4s ease',
        textDecoration: 'none',
        '&:hover' : {
        color: '#fff',
        opacity: '1',
        cursor: 'pointer',
        textDecoration: 'none',
  },
  '@media screen and (max-width: 640px)': {
    padding: '0.5rem',
  }
    },
    rightDiv:{
        gridArea: '1 / 5 / 2 / 6',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        '@media screen and (max-width: 640px)': {
            alignItems: 'center',
            gridArea: '1 / 4 / 2 / 6',
  }
    },
    icon: {
        transition: '0.3s ease',
        color: 'white',
        borderRadius: '50px',
        padding: '8px',
        '&:hover': {
        backgroundColor: '#212d45',
        transform: 'scale(1.2)',
        cursor: 'pointer',
        }
},
}));