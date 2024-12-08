        function checkId() {
            const userId = document.getElementById("confirmationId").value;
            const placeholderId = "86990628525028470457";
            const result = document.getElementById("result");

            if (userId === placeholderId) {
                result.innerHTML = '<span class="success">Congratulations, you have successfully registered your copy! To download your copy, go here.<a href="https://example.com" target="_blank">example.com</a>';
            } else {
                result.innerHTML = '<span class="error">Incorrect ID. Please retype your ID or try again later.</span>';
            }
        }