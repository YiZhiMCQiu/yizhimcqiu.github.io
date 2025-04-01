/**
 * 动态添加资源链接
 * @param {string} name - 链接显示文本
 * @param {string} href - 链接地址
 * @param {HTMLElement} category - 目标分类
 */
function addResource(name, href, category) {
    const link = document.createElement("a");
    link.className = "resource-link";
    link.href = href.replace(/@/g, window.location.href.replace(/\/index.html/g, ""));
    link.textContent = name;

    const container = category.querySelector(".links-container");
    container.appendChild(link);
}

/**
 * 创建新分类容器
 * @param {string} categoryName - 分类名称
 * @param {string} parentId - 父元素id
 * @returns {HTMLElement} 创建好的分类DOM元素
 */
function createCategory(categoryName, parentId) {
    const category = document.createElement("div");
    category.className = "category";
    category.dataset.category = categoryName;
    
    const title = document.createElement("h2");
    title.className = "category-title";
    title.textContent = categoryName;
    
    const linksContainer = document.createElement("div");
    linksContainer.className = "links-container";
    
    category.appendChild(title);
    category.appendChild(linksContainer);
    
    document.getElementById(parentId).appendChild(category);

    return category;
}

launcherCategory = createCategory("启动器", "links")
addResource("HMCL", "https://hmcl.huangyuhui.net/download", launcherCategory)
addResource("PCL", "https://download.hexdragon.top", launcherCategory)

resourcesCategory = createCategory("资源", "links")
addResource("CurseForge", "https://curseforge.com/minecraft", resourcesCategory)
addResource("Modrinth", "https://modrinth.com", resourcesCategory)


modpacksCategory = createCategory("整合包", "local-resources")
addResource("光影整合", "@/modpacks/shaders.zip", modpacksCategory)