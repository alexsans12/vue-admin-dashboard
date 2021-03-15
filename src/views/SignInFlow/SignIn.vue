<template>
    <div class="container">
        <div class="request">
            Don’t have a Design+Code HQ account?
            <router-link to="/request">Request an account</router-link>
        </div>
        <div class="login">
            <img src="@/assets/DCHQ.svg" alt="Logo DCHQ">
            <h4>Sign into Design+Code HQ</h4>
            <input type="email" placeholder="Email" name="email" id="email">
            <input type="password" placeholder="Password" name="password" id="password">
            <button>Sign In</button>
            <router-link to="/recover">Forgotten your password?</router-link> 
        </div>
    </div>
</template>

<script>
    export default {
        name: "SignIn"
    }
</script>

<style lang="scss" scoped>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh ;
    }

    .request {
        position: absolute;
        top: 40px;
        right: 40px;
        color: rgba(255, 255, 255, 0.3);

        a {
            color: white;
        }
    }

    .login {
        width: 400px;
    }

    h4 {
        margin: 0;
        font-size: 24px;
        line-height: 34px;
        text-align: center;
        color: #FFFFFF;
    }

    input {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.1);
        box-sizing: border-box;
        border-radius: 4px;

        height: 60px;
        width: 100%;
        
        font-size: 20px;
        line-height: 24px;
        padding-left: 20px;
        margin-top: 20px;
        color: white;

        &::placeholder {
            color: rgba(255, 255, 255, 0.3);
        }

        &:focus {
            background: rgba(255, 255, 255, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
    }

    button {
        background: #56CCF2;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
        border-radius: 4px;
        border: none;
        
        height: 60px;
        width: 100%;

        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        text-align: center;
        color: #FFFFFF;
        margin-top: 20px;
        margin-bottom: 40px;
    }

    a {
        font-size: 16px;
        line-height: 25px;
        text-align: center;
        color: rgba(255, 255, 255, 0.3);
        text-decoration: none;
    }
</style>