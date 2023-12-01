import{_ as s}from"./locales-ed8bb270.js";import{o as t,a,z as e}from"./vue-libs-83dbabed.js";const n={},l={class:"van-doc-markdown-body"},d=e(`<h1>Highlight</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Highlight the specified text content. Please upgrade <code>vant</code> to &gt;= v4.8.0 before using this component.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Highlight</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Highlight</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><p>You can specify keywords to be highlighted with <code>keywords</code> and source text with <code>source-string</code>.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-highlight</span> <span class="hljs-attr">:keywords</span>=<span class="hljs-string">&quot;keywords&quot;</span> <span class="hljs-attr">:source-string</span>=<span class="hljs-string">&quot;text&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-ts"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> text =
      <span class="hljs-string">&#39;Take your time and be patient. Life itself will eventually answer all those questions it once raised for you.&#39;</span>;
    <span class="hljs-keyword">const</span> keywords = <span class="hljs-string">&#39;questions&#39;</span>;

    <span class="hljs-keyword">return</span> {
      text,
      keywords,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="multiple-keywords" tabindex="-1">Multiple Keywords</h3><p>If you need to specific more than one keywords, you can pass in <code>keywords</code> as an array.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-highlight</span> <span class="hljs-attr">:keywords</span>=<span class="hljs-string">&quot;keywords&quot;</span> <span class="hljs-attr">:source-string</span>=<span class="hljs-string">&quot;text&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-ts"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> text =
      <span class="hljs-string">&#39;Take your time and be patient. Life itself will eventually answer all those questions it once raised for you.&#39;</span>;
    <span class="hljs-keyword">const</span> keywords = [<span class="hljs-string">&#39;time&#39;</span>, <span class="hljs-string">&#39;life&#39;</span>, <span class="hljs-string">&#39;answer&#39;</span>];

    <span class="hljs-keyword">return</span> {
      text,
      keywords,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="custom-class" tabindex="-1">Custom Class</h3><p>Set the <code>highlight-class</code> of the highlighted tag to customize the style.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-highlight</span>
  <span class="hljs-attr">:keywords</span>=<span class="hljs-string">&quot;keywords&quot;</span>
  <span class="hljs-attr">:source-string</span>=<span class="hljs-string">&quot;text&quot;</span>
  <span class="hljs-attr">highlight-class</span>=<span class="hljs-string">&quot;custom-class&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-ts"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> text =
      <span class="hljs-string">&#39;Take your time and be patient. Life itself will eventually answer all those questions it once raised for you.&#39;</span>;
    <span class="hljs-keyword">const</span> keywords = <span class="hljs-string">&#39;life&#39;</span>;

    <span class="hljs-keyword">return</span> {
      text,
      keywords,
    };
  },
};
</code></pre><pre><code class="language-css"><span class="hljs-selector-class">.custom-class</span> {
  <span class="hljs-attribute">color</span>: red;
}
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>auto-escape</td><td>Whether to automatically escape</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>case-sensitive</td><td>Is case sensitive</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>highlight-class</td><td>Class name of the highlight element</td><td><em>string</em></td><td>-</td></tr><tr><td>highlight-tag</td><td>HTML Tag of highlighted element</td><td><em>string</em></td><td><code>span</code></td></tr><tr><td>keywords</td><td>Expected highlighted text</td><td><em>string | string[]</em></td><td>-</td></tr><tr><td>source-string</td><td>Source text</td><td><em>string</em></td><td>-</td></tr><tr><td>tag</td><td>HTML Tag of root element</td><td><em>string</em></td><td><code>div</code></td></tr><tr><td>unhighlight-class</td><td>Class name of the unhighlight element</td><td><em>string</em></td><td>-</td></tr><tr><td>unhighlight-tag</td><td>HTML Tag of unhighlighted element</td><td><em>string</em></td><td><code>span</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">HighlightProps</span>, <span class="hljs-title class_">HighlightThemeVars</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-highlight-tag-color</td><td><em>var(--van-primary-color)</em></td><td>Color of highlighted text</td></tr></tbody></table></div>`,12),o=[d];function r(c,p){return t(),a("div",l,o)}const g=s(n,[["render",r]]);export{g as default};