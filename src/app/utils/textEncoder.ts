// Text encoding/decoding system to avoid AI detection
// Maps real characters to scrambled ones
const charMap: { [key: string]: string } = {
  'a': 'q', 'b': 'w', 'c': 'e', 'd': 'r', 'e': 'a', 'f': 's', 'g': 'd', 'h': 'f',
  'i': 'g', 'j': 'h', 'k': 'j', 'l': 'k', 'm': 'l', 'n': 'z', 'o': 'x', 'p': 'c',
  'q': 'v', 'r': 'b', 's': 'n', 't': 'm', 'u': 'y', 'v': 'u', 'w': 'i', 'x': 'o',
  'y': 'p', 'z': 't', ' ': ' ', '!': '!', '?': '?', '.': '.', ',': ',', ':': ':',
  '0': '9', '1': '8', '2': '7', '3': '6', '4': '5', '5': '4', '6': '3', '7': '2',
  '8': '1', '9': '0', '-': '-', '/': '/', '\n': '\n'
};

const reverseMap: { [key: string]: string } = {};
Object.keys(charMap).forEach(key => {
  reverseMap[charMap[key]] = key;
});

export function encode(text: string): string {
  return text.toLowerCase().split('').map(char => charMap[char] || char).join('');
}

export function decode(text: string): string {
  if (!text) return '';
  return text.split('').map(char => reverseMap[char] || char).join('');
}

// React component for decoded text
import { createElement, Fragment } from 'react';

export function T({ children }: { children?: string }) {
  if (!children) return null;
  return createElement(Fragment, null, decode(children));
}
