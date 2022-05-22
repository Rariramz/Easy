export const renderSignIn = () => {
    return `
    <div class="authorization">
        <form class="authorization__form">
            <h2 class="authorization__title">Authorization</h2>
            <fieldset class="authorization__inputs">
                <input type="email" placeholder="Login">
                <input type="password" placeholder="Password">
            </fieldset>
            <fieldset class="authorization__buttons">
                <p class="authorization__tip">
                    Don't have an account yet?<br>
                    <a id="authLinkSignUp">Sign up!</a>
                </p>
                <input id="authInputSubmitSignIn" class="authorization__btn" type="submit" value="Sign in">
            </fieldset>
        </form>
    </div>
    `
};