import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
<<<<<<< HEAD
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
=======
>>>>>>> parent of bbc0e29 (первый коммит)

export const ArticleParamsForm = () => {
	return (
		<>
			<ArrowButton />
			<aside className={styles.container}>
				<form className={styles.form}>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
