Для запуска необходимо
1. скачать бэкенд версию проекта https://github.com/1dogg/one_of_the_last
2. создать локальную базу данных

```SQL
CREATE DATABASE [sdb_persons]
GO

USE [sdb_persons]
GO

/****** Object:  Table [dbo].[Students]    Script Date: 21.03.2020 14:07:20 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Students](
	[PersonID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](50) NULL,
	[Family] [varchar](50) NULL,
	[Patronymic] [varchar](50) NULL,
	[Sex] [bit] NULL,
	[AcademicGroupNumber] [varchar](15) NULL,
	[PhotoURL] [varchar](100) NULL,
	[Skills] [varchar](1000) NULL,
	[TEMA_DIPLOMA] [varchar](80) NULL,
 CONSTRAINT [PK_Students] PRIMARY KEY CLUSTERED 
(
	[PersonID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO


INSERT INTO [dbo].[Students]([Name],[Family] ,[Patronymic],[Sex],
	[AcademicGroupNumber],[PhotoURL],[Skills],[TEMA_DIPLOMA])
VALUES
	('Валерия', 'Будевич', 'Александровна', 0, 'РИ-460002', '../../images/BVA.jpg', 
	'C#, CSS, HTML, JavaScript, MS SQL, 1C: Предприятие, Знание протоколов стека TCP/IP, понимание принципов семиуровневой модели OSI', '')

INSERT INTO [dbo].[Students]([Name],[Family] ,[Patronymic],[Sex],
	[AcademicGroupNumber],[PhotoURL],[Skills],[TEMA_DIPLOMA])
VALUES
	('Анна', 'Лысенко', 'Сергеевна', 0,	'РИ-460002', '../../images/LAS.jpg', 
	'C#, JavaScript, TypeScript, Python, HTML5, CSS3, React, Redux, MS SQL', 'Разработка системы управления видеостеной')

INSERT INTO [dbo].[Students]([Name],[Family] ,[Patronymic],[Sex],
	[AcademicGroupNumber],[PhotoURL],[Skills],[TEMA_DIPLOMA])
VALUES
	('Даниил', 'Черданцев', 'Артемиевич', 1, 'РИ-460002', '../../images/ChDA.PNG',
	'C#, LINQ, Bootstrap, Sass, JavaScript, jQuery, MS Visual Studio, .NET Framework, CSS, HTML, MS SQL, React, ASP.NET, MVC, Web API', '')

INSERT INTO [dbo].[Students]([Name],[Family] ,[Patronymic],[Sex],
	[AcademicGroupNumber],[PhotoURL],[Skills],[TEMA_DIPLOMA])
VALUES
	('Анна', 'Савельева', 'Игоревна', 0, 'РИ-460002', '../../images/SAI.jpeg',
	'С#, Unity, Веб-дизайн, Оформление документации', 'Проектирование корпуса ИРИТ-РТФ будущего в VR')

INSERT INTO [dbo].[Students]([Name],[Family] ,[Patronymic],[Sex],
	[AcademicGroupNumber],[PhotoURL],[Skills],[TEMA_DIPLOMA])
VALUES
	('Юлия','Cоломенникова', 'Александровна', 0, 'РИ-460002', '../../images/SJuA.jpeg', 
	'JavaScript, HTML, CSS, React, CorelDraw, Photoshop, C#, SQL' , '')

```
3. 
