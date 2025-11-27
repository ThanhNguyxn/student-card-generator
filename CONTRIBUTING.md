# Contributing to Student Card Generator

Thank you for your interest in contributing! 🎉

## How to Contribute

### Reporting Bugs

If you find a bug, please open an issue with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Browser and device information

### Suggesting Features

Feature requests are welcome! Please:
- Check if it's already suggested
- Explain the use case
- Describe the desired behavior

### Pull Requests

1. **Fork** the repository
2. **Create** a new branch (`git checkout -b feature/amazing-feature`)
3. **Make** your changes
4. **Test** thoroughly
5. **Commit** with clear messages (`git commit -m 'Add amazing feature'`)
6. **Push** to your branch (`git push origin feature/amazing-feature`)
7. **Open** a Pull Request

### Code Guidelines

- Keep the single-file architecture (index.html)
- Maintain responsive design
- Test on multiple browsers
- Use meaningful variable names
- Add comments for complex logic
- Follow existing code style

### Adding New Countries

When adding a new country:

1. Add universities to `universities` object:
```javascript
newcountry: [
    { name: "Local Name", nameEn: "English Name", domain: "example.edu" }
]
```

2. Add names to `names` object
3. Add departments to `departments` object
4. Add country button in HTML
5. Update `generateName()` function if needed
6. Test random generation

### Testing Checklist

- [ ] Random data generation works
- [ ] Manual input works
- [ ] PNG export works
- [ ] PDF export works
- [ ] Email copy works
- [ ] Photo upload works
- [ ] Responsive on mobile
- [ ] Works on Chrome, Firefox, Safari

## Questions?

Feel free to open an issue for discussion!

## Code of Conduct

Be respectful, inclusive, and constructive. This is an educational project – we're all learning together!

---

Thank you for contributing! ❤️
