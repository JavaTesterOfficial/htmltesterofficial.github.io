        function checkId() {
            const userId = document.getElementById("confirmationId").value;
            const placeholderId = "86990628525028470457";
            const result = document.getElementById("result");

            if (userId === placeholderId) {
                result.innerHTML = '<span class="success">Congratulations, you have successfully registered your copy! To download your copy, please go<a href="https://drive.google.com/drive/folders/1kbkK9wUcnuQzd4oYMlVRyyFMEWJNkdIX?usp=sharing" target="_blank"> here</a><br> To learn how to install your copy, please refer<a href="https://example.com" target="_blank"> here</a> for a tutorial.';
            } else {
                result.innerHTML = '<span class="error">Incorrect ID. Please retype your ID or try again later.</span>';
            }
        }
