export const renderSignUp = () => {
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
                    Already have an account?<br>
                    <a id="authLinkSignIn">Sign in!</a>
                </p>
                <input id="authInputSubmitSignUp" class="authorization__btn" type="submit" value="Sign up">
            </fieldset>
        </form>
    </div>
    `
};