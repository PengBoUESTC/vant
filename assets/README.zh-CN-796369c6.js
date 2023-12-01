import{_ as s}from"./locales-ed8bb270.js";import{o as a,a as t,z as n}from"./vue-libs-83dbabed.js";const l={},e={class:"van-doc-markdown-body"},p=n(`<h1>Tab 标签页</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>选项卡组件，用于在不同的内容区域之间进行切换。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Tab</span>, <span class="hljs-title class_">Tabs</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Tab</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Tabs</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><p>通过 <code>v-model:active</code> 绑定当前激活标签对应的索引值，默认情况下启用第一个标签。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标签 1&quot;</span>&gt;</span>内容 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标签 2&quot;</span>&gt;</span>内容 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标签 3&quot;</span>&gt;</span>内容 3<span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标签 4&quot;</span>&gt;</span>内容 4<span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> active = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);
    <span class="hljs-keyword">return</span> { active };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="tong-guo-ming-cheng-pi-pei" tabindex="-1">通过名称匹配</h3><p>在标签指定 <code>name</code> 属性的情况下，<code>v-model:active</code> 的值为当前标签的 <code>name</code>（此时无法通过索引值来匹配标签）。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;activeName&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标签 1&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;a&quot;</span>&gt;</span>内容 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标签 2&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;b&quot;</span>&gt;</span>内容 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标签 3&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;c&quot;</span>&gt;</span>内容 3<span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> activeName = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;b&#39;</span>);
    <span class="hljs-keyword">return</span> { activeName };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="biao-qian-lan-gun-dong" tabindex="-1">标签栏滚动</h3><p>标签数量超过 5 个时，标签栏可以在水平方向上滚动，切换时会自动将当前标签居中。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;index in 8&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;&#39;标签 &#39; + index&quot;</span>&gt;</span>
    内容 {{ index }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="jin-yong-biao-qian" tabindex="-1">禁用标签</h3><p>设置 <code>disabled</code> 属性即可禁用标签。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标签 1&quot;</span>&gt;</span>内容 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标签 2&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>内容 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标签 3&quot;</span>&gt;</span>内容 3<span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="yang-shi-feng-ge" tabindex="-1">样式风格</h3><p><code>Tab</code> 支持两种样式风格：<code>line</code> 和<code>card</code>，默认为 <code>line</code> 样式，可以通过 <code>type</code> 属性切换样式风格。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;card&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标签 1&quot;</span>&gt;</span>内容 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标签 2&quot;</span>&gt;</span>内容 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标签 3&quot;</span>&gt;</span>内容 3<span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="dian-ji-shi-jian" tabindex="-1">点击事件</h3><p>点击标签页时，会触发 <code>click-tab</code> 事件。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span> @<span class="hljs-attr">click-tab</span>=<span class="hljs-string">&quot;onClickTab&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标签 1&quot;</span>&gt;</span>内容 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标签 2&quot;</span>&gt;</span>内容 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> active = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClickTab</span> = (<span class="hljs-params">{ title }</span>) =&gt; <span class="hljs-title function_">showToast</span>(title);
    <span class="hljs-keyword">return</span> {
      active,
      onClickTab,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="nian-xing-bu-ju" tabindex="-1">粘性布局</h3><p>通过 <code>sticky</code> 属性可以开启粘性布局，粘性布局下，标签页滚动到顶部时会自动吸顶。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span> <span class="hljs-attr">sticky</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;index in 4&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;&#39;选项 &#39; + index&quot;</span>&gt;</span>
    内容 {{ index }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>
</code></pre><blockquote><p>Tips: 如果页面顶部有其他内容，可以通过 offset-top 属性设置吸顶时与顶部的距离。</p></blockquote></div><div class="van-doc-card"><h3 id="shou-suo-bu-ju" tabindex="-1">收缩布局</h3><p>通过 <code>shrink</code> 属性可以开启收缩布局，开启后，所有的标签会向左侧收缩对齐。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span> <span class="hljs-attr">shrink</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;index in 4&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;&#39;选项 &#39; + index&quot;</span>&gt;</span>
    内容 {{ index }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-biao-qian" tabindex="-1">自定义标签</h3><p>通过 <code>title</code> 插槽可以自定义标签内容。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;index in 2&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">title</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;more-o&quot;</span> /&gt;</span>选项 <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    内容 {{ index }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="qie-huan-dong-hua" tabindex="-1">切换动画</h3><p>通过 <code>animated</code> 属性可以开启切换标签内容时的转场动画。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span> <span class="hljs-attr">animated</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;index in 4&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;&#39;选项 &#39; + index&quot;</span>&gt;</span>
    内容 {{ index }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="hua-dong-qie-huan" tabindex="-1">滑动切换</h3><p>通过 <code>swipeable</code> 属性可以开启滑动切换标签页。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span> <span class="hljs-attr">swipeable</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;index in 4&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;&#39;选项 &#39; + index&quot;</span>&gt;</span>
    内容 {{ index }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="gun-dong-dao-hang" tabindex="-1">滚动导航</h3><p>通过 <code>scrollspy</code> 属性可以开启滚动导航模式，该模式下，内容将会平铺展示。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span> <span class="hljs-attr">scrollspy</span> <span class="hljs-attr">sticky</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;index in 8&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;&#39;选项 &#39; + index&quot;</span>&gt;</span>
    内容 {{ index }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="yi-bu-qie-huan" tabindex="-1">异步切换</h3><p>通过 <code>before-change</code> 属性可以在切换标签前执行特定的逻辑。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span> <span class="hljs-attr">:before-change</span>=<span class="hljs-string">&quot;beforeChange&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;index in 4&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;&#39;选项 &#39; + index&quot;</span>&gt;</span>
    内容 {{ index }}
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> active = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">beforeChange</span> = (<span class="hljs-params">index</span>) =&gt; {
      <span class="hljs-comment">// 返回 false 表示阻止此次切换</span>
      <span class="hljs-keyword">if</span> (index === <span class="hljs-number">1</span>) {
        <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
      }

      <span class="hljs-comment">// 返回 Promise 来执行异步逻辑</span>
      <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve</span>) =&gt;</span> {
        <span class="hljs-comment">// 在 resolve 函数中返回 true 或 false</span>
        <span class="hljs-title function_">resolve</span>(index !== <span class="hljs-number">3</span>);
      });
    };

    <span class="hljs-keyword">return</span> {
      beforeChange,
    };
  },
};
</code></pre><blockquote><p>Tips: 通过手势滑动不会触发 before-change 属性。</p></blockquote></div><div class="van-doc-card"><h3 id="yin-cang-biao-ti-lan" tabindex="-1">隐藏标题栏</h3><p>通过将 <code>showHeader</code> 属性设置为 <code>false</code>，可以不渲染 Tabs 的标题栏。在这种情况下，你可以通过一些自定义组件来控制 Tabs 的 <code>active</code> 属性。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active&quot;</span> <span class="hljs-attr">:show-header</span>=<span class="hljs-string">&quot;false&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tab</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;index in 4&quot;</span>&gt;</span> 内容 {{ index }} <span class="hljs-tag">&lt;/<span class="hljs-name">van-tab</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabs</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="tabs-props" tabindex="-1">Tabs Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model:active</td><td>绑定当前选中标签的标识符</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>type</td><td>样式风格类型，可选值为 <code>card</code></td><td><em>string</em></td><td><code>line</code></td></tr><tr><td>color</td><td>标签主题色</td><td><em>string</em></td><td><code>#1989fa</code></td></tr><tr><td>background</td><td>标签栏背景色</td><td><em>string</em></td><td><code>white</code></td></tr><tr><td>duration</td><td>动画时间，单位秒，设置为 0 可以禁用动画</td><td><em>number | string</em></td><td><code>0.3</code></td></tr><tr><td>line-width</td><td>底部条宽度，默认单位 <code>px</code></td><td><em>number | string</em></td><td><code>40px</code></td></tr><tr><td>line-height</td><td>底部条高度，默认单位 <code>px</code></td><td><em>number | string</em></td><td><code>3px</code></td></tr><tr><td>animated</td><td>是否开启切换标签内容时的转场动画</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>border</td><td>是否显示标签栏外边框，仅在 <code>type=&quot;line&quot;</code> 时有效</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>ellipsis</td><td>是否省略过长的标题文字</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>sticky</td><td>是否使用粘性布局</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>shrink</td><td>是否开启左侧收缩布局</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>swipeable</td><td>是否开启手势左右滑动切换</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>lazy-render</td><td>是否开启延迟渲染（首次切换到标签时才触发内容渲染）</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>scrollspy</td><td>是否开启滚动导航</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>show-header <code>v4.7.3</code></td><td>是否显示标题栏</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>offset-top</td><td>粘性布局下吸顶时与顶部的距离，支持 <code>px</code> <code>vw</code> <code>vh</code> <code>rem</code> 单位，默认 <code>px</code></td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>swipe-threshold</td><td>滚动阈值，标签数量超过阈值且总宽度超过标签栏宽度时开始横向滚动</td><td><em>number | string</em></td><td><code>5</code></td></tr><tr><td>title-active-color</td><td>标题选中态颜色</td><td><em>string</em></td><td>-</td></tr><tr><td>title-inactive-color</td><td>标题默认态颜色</td><td><em>string</em></td><td>-</td></tr><tr><td>before-change</td><td>切换标签前的回调函数，返回 <code>false</code> 可阻止切换，支持返回 Promise</td><td><em>(name: number | string) =&gt; boolean | Promise&lt;boolean&gt;</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="tab-props" tabindex="-1">Tab Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td><em>string</em></td><td>-</td></tr><tr><td>disabled</td><td>是否禁用标签</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>dot</td><td>是否在标题右上角显示小红点</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>badge</td><td>图标右上角徽标的内容</td><td><em>number | string</em></td><td>-</td></tr><tr><td>name</td><td>标签名称，作为匹配的标识符</td><td><em>number | string</em></td><td>标签的索引值</td></tr><tr><td>url</td><td>点击后跳转的链接地址</td><td><em>string</em></td><td>-</td></tr><tr><td>to</td><td>点击后跳转的目标路由对象，等同于 Vue Router 的 <a href="https://router.vuejs.org/zh/api/interfaces/RouterLinkProps.html#Properties-to" target="_blank">to 属性</a></td><td><em>string | object</em></td><td>-</td></tr><tr><td>replace</td><td>是否在跳转时替换当前页面历史</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>title-style</td><td>自定义标题样式</td><td><em>string | Array | object</em></td><td>-</td></tr><tr><td>title-class</td><td>自定义标题类名</td><td><em>string | Array | object</em></td><td>-</td></tr><tr><td>show-zero-badge</td><td>当 badge 为数字 0 时，是否展示徽标</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="tabs-events" tabindex="-1">Tabs Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click-tab</td><td>点击标签时触发</td><td><em>{ name: string | number, title: string, event: MouseEvent, disabled: boolean }</em></td></tr><tr><td>change</td><td>当前激活的标签改变时触发</td><td><em>name: string | number, title: string</em></td></tr><tr><td>rendered</td><td>标签内容首次渲染时触发（仅在开启延迟渲染后触发）</td><td><em>name: string | number, title: string</em></td></tr><tr><td>scroll</td><td>滚动时触发，仅在 sticky 模式下生效</td><td><em>{ scrollTop: number, isFixed: boolean }</em></td></tr></tbody></table><blockquote><p>提示：click 和 disabled 事件已废弃，请使用 click-tab 事件代替。</p></blockquote></div><div class="van-doc-card"><h3 id="tabs-fang-fa" tabindex="-1">Tabs 方法</h3><p>通过 ref 可以获取到 Tabs 实例并调用实例方法，详见<a href="#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa" target="_blank">组件实例方法</a>。</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td>resize</td><td>外层元素大小或组件显示状态变化时，可以调用此方法来触发重绘</td><td>-</td><td>-</td></tr><tr><td>scrollTo</td><td>滚动到指定的标签页，在滚动导航模式下可用</td><td><em>name: string | number</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">TabProps</span>, <span class="hljs-title class_">TabsType</span>, <span class="hljs-title class_">TabsProps</span>, <span class="hljs-title class_">TabsInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>TabsInstance</code> 是组件实例的类型，用法如下：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">TabsInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> tabsRef = ref&lt;<span class="hljs-title class_">TabsInstance</span>&gt;();

tabsRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">scrollTo</span>(<span class="hljs-number">0</span>);
</code></pre></div><div class="van-doc-card"><h3 id="tabs-slots" tabindex="-1">Tabs Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>nav-left</td><td>标签栏左侧内容</td></tr><tr><td>nav-right</td><td>标签栏右侧内容</td></tr><tr><td>nav-bottom</td><td>标签栏下方内容</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="tab-slots" tabindex="-1">Tab Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>标签页内容</td></tr><tr><td>title</td><td>自定义标题</td></tr></tbody></table></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-tab-text-color</td><td><em>var(--van-gray-7)</em></td><td>-</td></tr><tr><td>--van-tab-active-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-tab-disabled-text-color</td><td><em>var(--van-text-color-3)</em></td><td>-</td></tr><tr><td>--van-tab-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-tab-line-height</td><td><em>var(--van-line-height-md)</em></td><td>-</td></tr><tr><td>--van-tabs-default-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-tabs-line-height</td><td><em>44px</em></td><td>-</td></tr><tr><td>--van-tabs-card-height</td><td><em>30px</em></td><td>-</td></tr><tr><td>--van-tabs-nav-background</td><td><em>var(--van-background-2)</em></td><td>-</td></tr><tr><td>--van-tabs-bottom-bar-width</td><td><em>40px</em></td><td>-</td></tr><tr><td>--van-tabs-bottom-bar-height</td><td><em>3px</em></td><td>-</td></tr><tr><td>--van-tabs-bottom-bar-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr></tbody></table></div><h2 id="chang-jian-wen-ti" tabindex="-1">常见问题</h2><div class="van-doc-card"><h3 id="zu-jian-cong-yin-cang-zhuang-tai-qie-huan-dao-xian-shi-zhuang-tai-shi-di-bu-tiao-wei-zhi-cuo-wu" tabindex="-1">组件从隐藏状态切换到显示状态时，底部条位置错误？</h3><p>Tabs 组件在挂载时，会获取自身的宽度，并计算出底部条的位置。如果组件一开始处于隐藏状态，则获取到的宽度永远为 0，因此无法展示底部条位置。</p><h4 id="jie-jue-fang-fa" tabindex="-1">解决方法</h4><p>方法一，如果是使用 <code>v-show</code> 来控制组件展示的，则替换为 <code>v-if</code> 即可解决此问题：</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- Before --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-show</span>=<span class="hljs-string">&quot;show&quot;</span> /&gt;</span>
<span class="hljs-comment">&lt;!-- After --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">&quot;show&quot;</span> /&gt;</span>
</code></pre><p>方法二，调用组件的 resize 方法来主动触发重绘：</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabs</span> <span class="hljs-attr">v-show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;tabs&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-variable language_">this</span>.<span class="hljs-property">$refs</span>.<span class="hljs-property">tabs</span>.<span class="hljs-title function_">resize</span>();
</code></pre></div>`,30),d=[p];function c(o,r){return a(),t("div",e,d)}const j=s(l,[["render",c]]);export{j as default};
