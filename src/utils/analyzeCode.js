export function analyzeCode(code, language = 'javascript') {
  const issues = []
  const lines = code.split('\n')

  lines.forEach((line, index) => {
    const lineNum = index + 1
    const trimmed = line.trim()

    // 1. var usage
    if (language === 'javascript') {
      if (/\bvar\b/.test(trimmed)) {
        issues.push(`🔴 Line ${lineNum}: Using 'var' — use 'const' or 'let' instead`)
      }
    }

    // 2. == instead of ===
    if (language === 'javascript') {
      if (/[^=!<>]==(?!=)/.test(trimmed)) {
        issues.push(`🔴 Line ${lineNum}: Using '==' — use '===' for strict comparison`)
      }
    }

    // 3. assignment in condition
    if (language === 'javascript') {
      if (/if\s*\([^=!<>]*=[^=]/.test(trimmed)) {
        issues.push(`🔴 Line ${lineNum}: Assignment inside condition — did you mean '==='?`)
      }
    }

    // 4. loop off-by-one
    if (language === 'javascript') {
      if (/i\s*<=\s*\w+\.length/.test(trimmed)) {
        issues.push(`🔴 Line ${lineNum}: Loop uses '<=' with .length — may cause undefined error`)
      }
    }

    // 5. division without zero check
    if (/return\s+\w+\s*\/\s*\w+/.test(trimmed)) {
      issues.push(`⚠️ Line ${lineNum}: Division with no zero check`)
    }

    // 6. console.log
    if (language === 'javascript') {
      if (/console\.log/.test(trimmed)) {
        issues.push(`⚠️ Line ${lineNum}: console.log found — remove before production`)
      }
    }

    // 7. debugger statement
    if (language === 'javascript') {
      if (/\bdebugger\b/.test(trimmed)) {
        issues.push(`🔴 Line ${lineNum}: 'debugger' found — remove before production`)
      }
    }
    // 8. empty catch block
    if (/catch\s*\(.*\)\s*\{\s*\}/.test(trimmed)) {
      issues.push(`🔴 Line ${lineNum}: Empty catch block — handle the error`)
    }

    // 9. alert usage
    if (language === 'javascript') {
      if (/\balert\s*\(/.test(trimmed)) {
        issues.push(`⚠️ Line ${lineNum}: 'alert()' found — avoid in production`)
      }
    }

    // 10. TODO/FIXME comments
    if (/\/\/\s*(TODO|FIXME)/i.test(trimmed)) {
      issues.push(`💡 Line ${lineNum}: ${trimmed.includes('TODO') ? 'TODO' : 'FIXME'} comment found`)
    }
  })

  return issues
}