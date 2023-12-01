import{_ as s}from"./locales-ed8bb270.js";import{o as n,a,z as t}from"./vue-libs-83dbabed.js";const e={},l={class:"van-doc-markdown-body"},c=t(`<h1>useEventListener</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Attaching an event when the component is <code>mounted</code> and <code>activated</code>, then removing the event when the component is <code>unmounted</code> and <code>deactivated</code>.</p></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { useEventListener } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/use&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-comment">// attach the resize event to window</span>
    <span class="hljs-title function_">useEventListener</span>(<span class="hljs-string">&#39;resize&#39;</span>, <span class="hljs-function">() =&gt;</span> {
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;window resize&#39;</span>);
    });

    <span class="hljs-comment">// attach the click event to the body element</span>
    <span class="hljs-title function_">useEventListener</span>(
      <span class="hljs-string">&#39;click&#39;</span>,
      <span class="hljs-function">() =&gt;</span> {
        <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;click body&#39;</span>);
      },
      { <span class="hljs-attr">target</span>: <span class="hljs-variable language_">document</span>.<span class="hljs-property">body</span> },
    );
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="remove-event-listener" tabindex="-1">Remove Event Listener</h3><p><code>useEventListener</code> will return a <code>cleanup</code> function，you can call it to remove the event listener.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { useEventListener } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/use&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> cleanup = <span class="hljs-title function_">useEventListener</span>(<span class="hljs-string">&#39;resize&#39;</span>, <span class="hljs-function">() =&gt;</span> {
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;window resize&#39;</span>);
    });

    <span class="hljs-title function_">cleanup</span>();
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="type-declarations" tabindex="-1">Type Declarations</h3><pre><code class="language-ts"><span class="hljs-keyword">type</span> <span class="hljs-title class_">Options</span> = {
  target?: <span class="hljs-title class_">EventTarget</span> | <span class="hljs-title class_">Ref</span>&lt;<span class="hljs-title class_">EventTarget</span>&gt;;
  capture?: <span class="hljs-built_in">boolean</span>;
  passive?: <span class="hljs-built_in">boolean</span>;
};

<span class="hljs-keyword">function</span> <span class="hljs-title function_">useEventListener</span>(<span class="hljs-params">
  <span class="hljs-keyword">type</span>: <span class="hljs-built_in">string</span>,
  listener: EventListener,
  options?: Options,
</span>): <span class="hljs-function">() =&gt;</span> <span class="hljs-built_in">void</span>;
</code></pre></div><div class="van-doc-card"><h3 id="params" tabindex="-1">Params</h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Default Value</th></tr></thead><tbody><tr><td>type</td><td>Event type</td><td><em>string</em></td><td>-</td></tr><tr><td>listener</td><td>Callback function</td><td><em>EventListener</em></td><td>-</td></tr><tr><td>options</td><td>Options</td><td><em>Options</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="options" tabindex="-1">Options</h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Default Value</th></tr></thead><tbody><tr><td>target</td><td>Target element</td><td><em>EventTarget | Ref&lt;EventTarget&gt;</em></td><td><code>window</code></td></tr><tr><td>capture</td><td>Whether to enable capture</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>passive</td><td>if true, indicates that the listener will never call <code>preventDefault()</code></td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div>`,9),p=[c];function d(o,i){return n(),a("div",l,p)}const u=s(e,[["render",d]]);export{u as default};
