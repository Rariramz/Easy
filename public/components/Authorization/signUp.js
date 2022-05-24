export const renderSignUp = () => {
  return `
    <div class="authorization">
        <form class="authorization__form">
            <h2 class="authorization__title">Authorization</h2>
            <fieldset class="authorization__inputs">
                <input id="inputEmail" type="email" placeholder="Login">
                <input id="inputPassword" type="password" placeholder="Password">
                <p id="authorizationError" class="authorization__tip authorization__error" hidden></p>
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
    `;
};
