/* Tiny markdown renderer tuned for the stock-brief format.
   - English section headers kept as-is (numbering stripped)
   - Thai body preserved
   - Bull / Bear / Verdict / Kill blocks get semantic classes for color */
(function(){
  function esc(s){
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }
  function inline(s){
    s = esc(s);
    s = s.replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>');
    // standalone-ish italics: _word_ bounded by spaces / ends
    s = s.replace(/(^|[\s(])_([^_]+?)_(?=[\s.,;:)]|$)/g,'$1<em>$2</em>');
    return s;
  }
  function headClass(t){
    const x = t.toLowerCase();
    if(/bull/.test(x)) return 'h-bull';
    if(/bear/.test(x)) return 'h-bear';
    if(/verdict/.test(x)) return 'h-verdict';
    if(/kill/.test(x)) return 'h-kill';
    if(/what to ask/.test(x)) return 'h-ask';
    return '';
  }
  const VWORD = /^\*{0,2}(BUY|WATCH|PASS)\*{0,2}$/i;

  window.renderBrief = function(md){
    const lines = md.replace(/\r/g,'').split('\n');
    let html = '', i = 0;
    let firstH1seen = false;

    function flushPara(buf){
      if(!buf.length) return;
      const text = buf.join(' ').trim();
      if(VWORD.test(text)){
        const v = text.replace(/\*/g,'').toUpperCase();
        html += '<div class="verdict-stamp v-'+v.toLowerCase()+'">'+v+'</div>';
      } else {
        html += '<p>'+inline(text)+'</p>';
      }
    }

    while(i < lines.length){
      let line = lines[i];
      const t = line.trim();

      if(t === ''){ i++; continue; }

      // horizontal rule
      if(/^(-{3,}|\*{3,}|_{3,})$/.test(t)){ html += '<hr>'; i++; continue; }

      // headings
      let hm = t.match(/^(#{1,6})\s+(.*)$/);
      if(hm){
        const level = hm[1].length;
        let txt = hm[2].replace(/^\d+\.\s*/,'').trim();   // strip "1. "
        if(level === 1){
          if(!firstH1seen){ firstH1seen = true; i++; continue; } // header shown in reader chrome
          html += '<h2 class="md-h2">'+inline(txt)+'</h2>'; i++; continue;
        }
        if(level === 2){ html += '<h2 class="md-h2 '+headClass(txt)+'">'+inline(txt)+'</h2>'; i++; continue; }
        html += '<h3 class="md-h3 '+headClass(txt)+'">'+inline(txt)+'</h3>'; i++; continue;
      }

      // standalone **Bull** / **Bear**
      if(/^\*\*(Bull|Bear)\*\*$/i.test(t)){
        const w = t.replace(/\*/g,'');
        html += '<div class="bb-head '+(/bull/i.test(w)?'h-bull':'h-bear')+'">'+w+' case</div>';
        i++; continue;
      }

      // blockquote
      if(/^>\s?/.test(t)){
        let buf = [];
        while(i < lines.length && /^>\s?/.test(lines[i].trim())){
          buf.push(lines[i].trim().replace(/^>\s?/,'')); i++;
        }
        html += '<blockquote>'+inline(buf.join(' '))+'</blockquote>';
        continue;
      }

      // unordered list
      if(/^[-*]\s+/.test(t)){
        html += '<ul>';
        while(i < lines.length && /^[-*]\s+/.test(lines[i].trim())){
          html += '<li>'+inline(lines[i].trim().replace(/^[-*]\s+/,''))+'</li>'; i++;
        }
        html += '</ul>';
        continue;
      }

      // ordered list
      if(/^\d+\.\s+/.test(t)){
        html += '<ol>';
        while(i < lines.length && /^\d+\.\s+/.test(lines[i].trim())){
          html += '<li>'+inline(lines[i].trim().replace(/^\d+\.\s+/,''))+'</li>'; i++;
        }
        html += '</ol>';
        continue;
      }

      // paragraph (gather consecutive plain lines)
      let buf = [];
      while(i < lines.length){
        const tt = lines[i].trim();
        if(tt === '' || /^(#{1,6})\s/.test(tt) || /^[-*]\s+/.test(tt) ||
           /^\d+\.\s+/.test(tt) || /^>\s?/.test(tt) ||
           /^(-{3,}|\*{3,}|_{3,})$/.test(tt) || /^\*\*(Bull|Bear)\*\*$/i.test(tt)) break;
        buf.push(tt); i++;
      }
      flushPara(buf);
    }
    return html;
  };
})();
