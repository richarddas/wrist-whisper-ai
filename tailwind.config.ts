
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
                // WristGPT custom colors
                navy: {
                    DEFAULT: '#051C2C',
                    light: '#0A324F'
                },
                silver: {
                    DEFAULT: '#8E9196',
                    light: '#F1F1F1',
                    dark: '#222222'
                },
                teal: {
                    DEFAULT: '#08C7BA',
                    light: '#3CDFD5',
                    dark: '#069A90'
                }
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
                'fade-in': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(10px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                },
                'fade-in-right': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateX(20px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateX(0)'
                    }
                },
                'fade-in-left': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateX(-20px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateX(0)'
                    }
                },
                'pulse-slow': {
                    '0%, 100%': {
                        opacity: '1'
                    },
                    '50%': {
                        opacity: '0.8'
                    }
                },
                'typing': {
                    '0%': {
                        width: '0%',
                    },
                    '100%': {
                        width: '100%',
                    }
                },
                'blink': {
                    '0%, 100%': {
                        borderColor: 'transparent'
                    },
                    '50%': {
                        borderColor: 'currentColor'
                    }
                },
                'shimmer': {
                    '0%': {
                        backgroundPosition: '-200% 0'
                    },
                    '100%': {
                        backgroundPosition: '200% 0'
                    }
                }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-in': 'fade-in 0.6s ease-out',
                'fade-in-delayed': 'fade-in 0.6s ease-out 0.3s forwards',
                'fade-in-right': 'fade-in-right 0.6s ease-out',
                'fade-in-left': 'fade-in-left 0.6s ease-out',
                'pulse-slow': 'pulse-slow 3s infinite',
                'typing': 'typing 3.5s steps(40, end)',
                'blink': 'blink 1s step-end infinite',
                'shimmer': 'shimmer 8s infinite linear'
			},
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'navy-gradient': 'linear-gradient(to right, #051C2C, #0A324F)',
                'teal-gradient': 'linear-gradient(to right, #08C7BA, #3CDFD5)',
                'dark-gradient': 'linear-gradient(to bottom, rgba(5, 28, 44, 0.8), rgba(5, 28, 44, 1))',
            }
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
