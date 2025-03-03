
---

### **4. Challenges & Solutions**
Create a file: `docs/docs/challenges.md`

```md
# Challenges & Solutions

## 1. API Rate Limits
**Problem:** The API restricts frequent calls, causing failures when users spam the "Refresh" button.  
**Solution:** Implemented caching and debouncing to limit API calls.

## 2. UI Performance
**Problem:** Filtering caused unnecessary re-renders.  
**Solution:** Used memoization to optimize rendering.

## 3. Search Bar Behavior
**Problem:** Initially, filtering didn't work correctly on first render.  
**Solution:** Displayed the full list on mount and only applied filters when a search query is entered.
