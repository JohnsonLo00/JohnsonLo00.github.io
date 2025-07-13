
document.addEventListener('DOMContentLoaded', () => {
    const ToCButton = document.getElementById('ToCButton');
    const sidebar = document.getElementById('sidebar');

    // 阻止按钮点击事件冒泡到全局点击事件监听器
    ToCButton.addEventListener('click', (event) => {
        event.stopPropagation(); // 阻止事件冒泡
        sidebar.style.left = sidebar.style.left === '-250px' ? '0' : '-250px';
    });

    // 添加全局点击事件监听器
    document.addEventListener('click', (event) => {
        // 检查点击事件的目标是否不是按钮或目录内的元素
        if (!ToCButton.contains(event.target) && !sidebar.contains(event.target)) {
            sidebar.style.left = '-250px'; // 折叠隐藏目录
        }
    });

    // 防止点击目录内的链接时也触发全局点击事件导致目录隐藏
    sidebar.addEventListener('click', (event) => {
        event.stopPropagation(); // 如果需要在目录内点击链接时不隐藏目录，则添加此行
    });
});