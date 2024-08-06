// import styles from './Button.module.css'

function Button() {
    
    const styles = {
        backgroundColor: "hsl(200, 100&, 50%)",
        color: "blue",
    }

    // return(<button className={styles.button}>Click me</button>);
    return(<button style={styles}>Click me</button>);
}

export default Button