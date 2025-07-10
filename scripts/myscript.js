
// -------------- 代码块 ---------------- //
function copyCode(button) {
    const codeBlock = button.closest('.code-block').querySelector('code'); // 获取 <code> 元素
    const codeText = codeBlock.textContent; // 获取代码文本内容

    // 使用 Clipboard API（现代浏览器）
    if (navigator.clipboard) {
        navigator.clipboard.writeText(codeText).then(() => {
            alert('Codes copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    } else {
        // 回退到 TextRange（仅针对 IE）
        const textArea = document.createElement("textarea");
        textArea.value = codeText;
        textArea.style.position = "fixed";  // 避免页面滚动
        textArea.style.top = "-9999px";

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            const successful = document.execCommand('copy');
            const msg = successful ? 'successful' : 'unsuccessful';
            console.log('Copy command was ' + msg);
            alert('Codes copied to clipboard!'); // 通知用户复制成功（仅在没有 Clipboard API 的情况下）
        } catch (err) {
            console.error('Oops, unable to copy', err);
        }

        document.body.removeChild(textArea);
    }
}
// ============================================ //


// -------------- 返回顶部按钮 ---------------- //

document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('backToTopBtn');

    // 点击按钮回到顶部
    btn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // 平滑滚动到顶部
        });
    });
});

// ============================================ //

