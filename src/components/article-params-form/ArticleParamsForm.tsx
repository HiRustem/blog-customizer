import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { SetStateAction, useRef, useState } from 'react';
import clsx from 'clsx';
import { useOutsideClickClose } from '../select/hooks/useOutsideClickClose';
import { Text } from '../text';
import { Select } from '../select';
import { ArticleStateType, OptionType, fontFamilyOptions, fontColors, fontSizeOptions, defaultArticleState, backgroundColors, contentWidthArr } from 'src/constants/articleProps';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';

interface ArticleParamsFormProps {
	currentSettings: ArticleStateType;
	setCurrentSettings: React.Dispatch<React.SetStateAction<ArticleStateType>>;
}

export const ArticleParamsForm = ({ currentSettings, setCurrentSettings }: ArticleParamsFormProps) => {
	const rootRef = useRef<HTMLDivElement>(null)
	const [isOpen, setIsOpen] = useState(false)
	const [formState, setFormState] = useState(currentSettings)

	useOutsideClickClose({
		isOpen,
		rootRef,
		onClose: () => setIsOpen(false),
		onChange: setIsOpen,
	})

	const toggleVisible = () => {
		setIsOpen(prev => !prev)
	}

	const handleSelect = (optionType: keyof ArticleStateType) => (option: OptionType) => {
		setFormState({
			...formState,
			[optionType]: option
		})
	}

	const handleReset = () => {
		setFormState(defaultArticleState)
		setCurrentSettings(defaultArticleState)
	}

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		setCurrentSettings(formState)
	}

	return (
		<div ref={rootRef}>
			<ArrowButton isOpen={isOpen} toggle={toggleVisible} />
			<aside className={clsx(styles.container, isOpen && styles.container_open)}>
				<form className={styles.form} onSubmit={handleSubmit}>
					<Text children='Задайте параметры' as='h2' size={31} weight={800} uppercase={true} />

					<Select selected={formState.fontFamilyOption} onChange={handleSelect('fontFamilyOption')} options={fontFamilyOptions} title='Шрифт' />

					<RadioGroup name='radio' selected={formState.fontSizeOption} onChange={handleSelect('fontSizeOption')} options={fontSizeOptions} title='Размер шрифта' />

					<Select selected={formState.fontColor} onChange={handleSelect('fontColor')} options={fontColors} title='Цвет шрифта' />

					<Separator />

					<Select selected={formState.backgroundColor} onChange={handleSelect('backgroundColor')} options={backgroundColors} title='Цвет фона' />

					<Select selected={formState.contentWidth} onChange={handleSelect('contentWidth')} options={contentWidthArr} title='Ширина контента' />

					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' onClick={handleReset} />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</div>
	);
};
